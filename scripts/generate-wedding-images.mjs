import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import TextToSVG from 'text-to-svg'

const root = process.cwd()
const publicDir = path.join(root, 'public')
const fontPath = path.join(publicDir, 'assets', 'fonts', 'wedding-script.ttf')
const textFontPath = path.join(publicDir, 'assets', 'fonts', 'wedding-text.ttf')
const textToSVG = TextToSVG.loadSync(fontPath)
const readableTextToSVG = TextToSVG.loadSync(textFontPath)

function svgText({ text, width, height, size, color = '#54332a', y = 0.58, strokeWidth = 0 }) {
  const metrics = textToSVG.getMetrics(text, { fontSize: size, anchor: 'top' })
  const x = Math.max(0, (width - metrics.width) / 2)
  const top = Math.max(0, (height - metrics.height) * y)
  const d = textToSVG.getD(text, { x, y: top, fontSize: size, anchor: 'top' })
  const stroke = strokeWidth > 0 ? ` stroke="${color}" stroke-width="${strokeWidth}" stroke-linejoin="round"` : ''

  return Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><path d="${d}" fill="${color}"${stroke}/></svg>`)
}

function splitLines(text, size, maxWidth, renderer = textToSVG) {
  const lines = []

  String(text).split(/\n+/).forEach(paragraph => {
    let line = ''
    paragraph.split(/\s+/).forEach(word => {
      const next = line ? `${line} ${word}` : word
      const { width } = renderer.getMetrics(next, { fontSize: size, anchor: 'top' })
      if (line && width > maxWidth) {
        lines.push(line)
        line = word
      } else {
        line = next
      }
    })
    if (line) lines.push(line)
  })

  return lines
}

function svgTextBlock({ text, width, height, size, color = '#54332a', lineHeight = 1.25, renderer = textToSVG }) {
  const lines = splitLines(text, size, width * 0.9, renderer)
  const totalHeight = lines.length * size * lineHeight
  const startY = Math.max(size, (height - totalHeight) / 2 + size)
  const paths = lines.map((line, index) => {
    const metrics = renderer.getMetrics(line, { fontSize: size, anchor: 'top' })
    const x = Math.max(0, (width - metrics.width) / 2)
    const y = startY + index * size * lineHeight
    return `<path d="${renderer.getD(line, { x, y, fontSize: size, anchor: 'top' })}" fill="${color}"/>`
  }).join('')

  return Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">${paths}</svg>`)
}

async function writePng(outputDir, name, options) {
  await sharp(svgText(options)).png().toFile(path.join(outputDir, name))
}

async function writeBlockPng(outputDir, name, options) {
  await sharp(svgTextBlock(options)).png().toFile(path.join(outputDir, name))
}

async function generateImages(cfg, outputDir) {
  await fs.mkdir(outputDir, { recursive: true })
  await Promise.all([
    writePng(outputDir, 'groom-name.png', { text: cfg.groomName, width: 660, height: 200, size: 158, y: 0.38, strokeWidth: 1.25 }),
    writePng(outputDir, 'bride-name.png', { text: cfg.brideName, width: 660, height: 200, size: 158, y: 0.38, strokeWidth: 1.25 }),
    writePng(outputDir, 'wedding-month.png', { text: cfg.weddingMonth, width: 520, height: 190, size: 150, y: 0.42 }),
    writePng(outputDir, 'wedding-time.png', { text: cfg.weddingTime, width: 420, height: 180, size: 126, color: '#a99a94' }),
    writeBlockPng(outputDir, 'invitation-title.png', { text: `${cfg.invitationTitle}\n${cfg.invitationSubtitle}`, width: 900, height: 620, size: 112, color: '#fff8ef', lineHeight: 1.55 }),
    writePng(outputDir, 'host-left-name.png', { text: cfg.hostNameLeft, width: 660, height: 200, size: 148, y: 0.38, strokeWidth: 1.15 }),
    writePng(outputDir, 'host-right-name.png', { text: cfg.hostNameRight, width: 660, height: 200, size: 148, y: 0.38, strokeWidth: 1.15 }),
    writePng(outputDir, 'venue-display-name.png', { text: cfg.venueDisplayName, width: 520, height: 170, size: 110, color: '#54332a', y: 0.42 }),
    writePng(outputDir, 'venue-name.png', { text: cfg.venueName, width: 520, height: 120, size: 80, color: '#54332a', y: 0.38 }),
    writePng(outputDir, 'venue-city.png', { text: cfg.venueCity, width: 520, height: 120, size: 82, color: '#54332a', y: 0.38 }),
    writePng(outputDir, 'venue-street.png', { text: cfg.venueStreet, width: 720, height: 130, size: 72, color: '#54332a', y: 0.34 }),
    writeBlockPng(outputDir, 'invitation-text.png', { text: cfg.invitationText, width: 940, height: 300, size: 42, color: '#54332a', lineHeight: 1.35, renderer: readableTextToSVG }),
  ])
}

const defaultConfig = JSON.parse(await fs.readFile(path.join(root, 'wedding.json'), 'utf8'))
await generateImages(defaultConfig, path.join(publicDir, 'generated'))

const clientsDir = path.join(publicDir, 'clients')
const clientEntries = await fs.readdir(clientsDir, { withFileTypes: true }).catch(() => [])
for (const entry of clientEntries.filter(entry => entry.isDirectory())) {
  const configPath = path.join(clientsDir, entry.name, 'wedding.json')
  try {
    const clientConfig = JSON.parse(await fs.readFile(configPath, 'utf8'))
    await generateImages(clientConfig, path.join(clientsDir, entry.name, 'generated'))
    console.log(`Сгенерированы надписи: ${entry.name}`)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}
