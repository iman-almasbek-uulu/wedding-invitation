import chokidar from 'chokidar';
import { spawn } from 'node:child_process';
import { resolve, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const ignoredDirectories = ['.git', '.graphify', '.mimocode', 'node_modules', 'dist', 'graphify-out', '.vercel', 'client-vault']
  .map((directory) => resolve(root, directory));
const isIgnored = (filePath) => ignoredDirectories.some((directory) => filePath === directory || filePath.startsWith(`${directory}${sep}`));
let timer;
let running = false;
let queued = false;

function rebuild(reason) {
  if (running) {
    queued = true;
    return;
  }
  running = true;
  console.log(`[structure:watch] ${reason}; обновляю Graphify и карту файлов`);
  const child = spawn(process.execPath, ['scripts/update-project-structure.mjs'], { cwd: root, stdio: 'inherit' });
  child.on('exit', (code) => {
    running = false;
    if (code !== 0) console.error(`[structure:watch] обновление завершилось с кодом ${code}`);
    if (queued) {
      queued = false;
      rebuild('есть новые изменения');
    }
  });
}

const watcher = chokidar.watch(root, {
  ignored: isIgnored,
  ignoreInitial: true,
  awaitWriteFinish: { stabilityThreshold: 500, pollInterval: 100 },
});
watcher.on('all', (event, filePath) => {
  clearTimeout(timer);
  timer = setTimeout(() => rebuild(`${event}: ${filePath.slice(root.length + 1)}`), 800);
});
watcher.on('ready', () => console.log('[structure:watch] Слежение включено: любое изменение структуры обновит Graphify. Ctrl+C для остановки.'));
