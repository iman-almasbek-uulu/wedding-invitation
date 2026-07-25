import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import TextToSVG from 'text-to-svg'

const root = process.cwd()
const templateDir = path.join(root, 'templates', '1')
const fontPath = path.join(templateDir, 'assets', 'fonts', 'wedding-script.ttf')
const textToSVG = TextToSVG.loadSync(fontPath)

function svgText({ text, width, height, size, color = '#54332a', y = 0.5, strokeWidth = 0 }) {
  // Шрифт поддерживает «у», но не кыргызскую «ү»: превращаем её в каллиграфическую
  // «у» и добавляем две точки в SVG. Результат остаётся единым прозрачным PNG.
  const displayText = text.replaceAll('ү', 'у').replaceAll('Ү', 'У')
  const metrics = textToSVG.getMetrics(displayText, { fontSize: size, anchor: 'top' })
  const x = Math.max(0, (width - metrics.width) / 2)
  // У каллиграфического шрифта длинные нижние штрихи. Высота холста всегда
  // больше метрик текста, чтобы они оставались внутри прозрачного PNG.
  const top = Math.max(16, (height - metrics.height) * y)
  const d = textToSVG.getD(displayText, { x, y: top, fontSize: size, anchor: 'top' })
  const stroke = strokeWidth > 0 ? ` stroke="${color}" stroke-width="${strokeWidth}" stroke-linejoin="round"` : ''
  const diacritics = [...text].flatMap((char, index) => {
    if (char !== 'ү' && char !== 'Ү') return []
    const prefix = [...displayText].slice(0, index).join('')
    const prefixWidth = textToSVG.getMetrics(prefix, { fontSize: size, anchor: 'top' }).width
    const charWidth = textToSVG.getMetrics(displayText[index], { fontSize: size, anchor: 'top' }).width
    const r = Math.max(3, size * 0.045)
    const cx = x + prefixWidth + charWidth * 0.32
    const cy = top + size * 0.13
    return [`<circle cx="${cx - r * 1.5}" cy="${cy}" r="${r}" fill="${color}"/>`, `<circle cx="${cx + r * 1.5}" cy="${cy}" r="${r}" fill="${color}"/>`]
  }).join('')
  return Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><path d="${d}" fill="${color}"${stroke}/>${diacritics}</svg>`)
}

async function writePng(outputDir, name, options) {
  await sharp(svgText(options)).png().toFile(path.join(outputDir, name))
}

async function generateDecorativeImages(cfg, outputDir) {
  await fs.rm(outputDir, { recursive: true, force: true })
  await fs.mkdir(outputDir, { recursive: true })
  await Promise.all([
    // Пара: тот же размер и каллиграфия, но с запасом по вертикали.
    writePng(outputDir, 'groom-name.png', { text: cfg.groomName, width: 660, height: 280, size: 158, y: 0.5, strokeWidth: 1.25 }),
    writePng(outputDir, 'bride-name.png', { text: cfg.brideName, width: 660, height: 280, size: 158, y: 0.5, strokeWidth: 1.25 }),
    // Имена хозяев торжества тоже являются декоративными PNG, не live-текстом.
    writePng(outputDir, 'host-left-name.png', { text: cfg.hostNameLeft, width: 820, height: 280, size: 158, y: 0.5, strokeWidth: 1.25 }),
    writePng(outputDir, 'host-right-name.png', { text: cfg.hostNameRight, width: 820, height: 280, size: 158, y: 0.5, strokeWidth: 1.25 }),
  ])
}

const config = JSON.parse(await fs.readFile(path.join(templateDir, 'demo.json'), 'utf8'))
await generateDecorativeImages(config, path.join(templateDir, 'generated'))
console.log('Сгенерированы декоративные PNG: имена пары и хозяев торжества.')
