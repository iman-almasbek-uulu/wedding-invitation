import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const outputDir = join(root, 'graphify-out');
const ignored = new Set(['.git', '.graphify', '.mimocode', 'node_modules', 'dist', 'graphify-out', '.vercel', 'client-vault']);
const graphify = process.env.GRAPHIFY_BIN || '/home/azureuser/.local/bin/graphify';

function inventory(directory) {
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => !ignored.has(entry.name))
    .flatMap((entry) => {
      const absolute = join(directory, entry.name);
      const path = relative(root, absolute) || '.';
      if (entry.isDirectory()) return [{ path: `${path}/`, type: 'directory' }, ...inventory(absolute)];
      if (!entry.isFile()) return [];
      return [{ path, type: 'file', extension: extname(entry.name) || null, bytes: statSync(absolute).size }];
    });
}

mkdirSync(outputDir, { recursive: true });
if (!existsSync(graphify)) throw new Error(`Graphify не найден: ${graphify}`);
execFileSync(graphify, ['update', '.'], { cwd: root, stdio: 'inherit' });

const files = inventory(root).sort((a, b) => a.path.localeCompare(b.path, 'en'));
writeFileSync(join(outputDir, 'project-structure.json'), `${JSON.stringify({ generatedAt: new Date().toISOString(), root, files }, null, 2)}\n`);
console.log(`Структура обновлена: ${files.length} элементов → graphify-out/`);
