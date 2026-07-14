import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import TextToSVG from 'text-to-svg'
import cfg from '../wedding.json' with { type: 'json' }

const root = process.cwd()
const fontPath = path.join(root, 'public', 'assets', 'fonts', 'wedding-script.ttf')
const textFontPath = path.join(root, 'public', 'assets', 'fonts', 'wedding-text.ttf')
const outputDir = path.join(root, 'public', 'generated')
const textToSVG = TextToSVG.loadSync(fontPath)
const readableTextToSVG = TextToSVG.loadSync(textFontPath)

await fs.mkdir(outputDir, { recursive: true })

function svgText({ text, width, height, size, color = '#54332a', y = 0.58, strokeWidth = 0 }) {
  const metrics = textToSVG.getMetrics(text, { fontSize: size, anchor: 'top' })
  const x = Math.max(0, (width - metrics.width) / 2)
  const top = Math.max(0, (height - metrics.height) * y)
  const d = textToSVG.getD(text, { x, y: top, fontSize: size, anchor: 'top' })
  const stroke = strokeWidth > 0 ? ` stroke="${color}" stroke-width="${strokeWidth}" stroke-linejoin="round"` : ''

  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <path d="${d}" fill="${color}"${stroke}/>
    </svg>
  `)
}

function splitLines(text, size, maxWidth, renderer = textToSVG) {
  const paragraphs = String(text).split(/\n+/)
  const lines = []

  paragraphs.forEach(paragraph => {
    const words = paragraph.split(/\s+/)
    let line = ''

    words.forEach(word => {
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
    const d = renderer.getD(line, { x, y, fontSize: size, anchor: 'top' })
    return `<path d="${d}" fill="${color}"/>`
  }).join('\n')

  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      ${paths}
    </svg>
  `)
}

async function writePng(name, options) {
  await sharp(svgText(options)).png().toFile(path.join(outputDir, name))
}

async function writeBlockPng(name, options) {
  await sharp(svgTextBlock(options)).png().toFile(path.join(outputDir, name))
}

await Promise.all([
  writePng('groom-name.png', {
    text: cfg.groomName,
    width: 660,
    height: 200,
    size: 158,
    y: 0.38,
    strokeWidth: 1.25,
  }),
  writePng('bride-name.png', {
    text: cfg.brideName,
    width: 660,
    height: 200,
    size: 158,
    y: 0.38,
    strokeWidth: 1.25,
  }),
  writePng('wedding-month.png', {
    text: cfg.weddingMonth,
    width: 520,
    height: 190,
    size: 150,
    y: 0.42,
  }),
  writePng('wedding-time.png', {
    text: cfg.weddingTime,
    width: 420,
    height: 180,
    size: 126,
    color: '#a99a94',
  }),
  writeBlockPng('invitation-title.png', {
    text: `${cfg.invitationTitle}\n${cfg.invitationSubtitle}`,
    width: 900,
    height: 620,
    size: 112,
    color: '#fff8ef',
    lineHeight: 1.55,
  }),
  writePng('host-left-name.png', {
    text: cfg.hostNameLeft,
    width: 660,
    height: 200,
    size: 148,
    y: 0.38,
    strokeWidth: 1.15,
  }),
  writePng('host-right-name.png', {
    text: cfg.hostNameRight,
    width: 660,
    height: 200,
    size: 148,
    y: 0.38,
    strokeWidth: 1.15,
  }),
  writePng('venue-display-name.png', {
    text: cfg.venueDisplayName,
    width: 520,
    height: 170,
    size: 110,
    color: '#54332a',
    y: 0.42,
  }),
  writePng('venue-name.png', {
    text: cfg.venueName,
    width: 520,
    height: 120,
    size: 80,
    color: '#54332a',
    y: 0.38,
  }),
  writePng('venue-city.png', {
    text: cfg.venueCity,
    width: 520,
    height: 120,
    size: 82,
    color: '#54332a',
    y: 0.38,
  }),
  writePng('venue-street.png', {
    text: cfg.venueStreet,
    width: 720,
    height: 130,
    size: 72,
    color: '#54332a',
    y: 0.34,
  }),
  writeBlockPng('invitation-text.png', {
    text: cfg.invitationText,
    width: 940,
    height: 300,
    size: 42,
    color: '#54332a',
    lineHeight: 1.35,
    renderer: readableTextToSVG,
  }),
])
