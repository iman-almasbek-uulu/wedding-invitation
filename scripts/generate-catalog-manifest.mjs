import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const templateDir = path.join(root, 'templates', '1')
const metadataPath = path.join(templateDir, 'template.json')
const template = JSON.parse(await fs.readFile(metadataPath, 'utf8'))
const catalog = template.catalog

if (!template.id || !template.name || !template.category || !template.preview) {
  throw new Error('В template.json отсутствуют обязательные id, name, category или preview')
}
if (!catalog?.label || !catalog?.description || !catalog?.packageLevel) {
  throw new Error('В template.json отсутствуют обязательные метаданные catalog')
}

const outputDir = path.join(root, 'public', 'catalog-template')
await fs.mkdir(outputDir, { recursive: true })

const manifest = {
  slug: template.id,
  name: template.name,
  title: catalog.title || `Свадебное приглашение ${template.name}`,
  category: template.category,
  label: catalog.label,
  description: catalog.description,
  style: catalog.style,
  packageLevel: catalog.packageLevel,
  priceRange: catalog.priceRange,
  tags: catalog.tags,
  features: catalog.features,
  recommendedUse: catalog.recommendedUse,
  isReady: template.status === 'ready',
  demoPath: `/templates/${template.id}/`,
  previewImage: `/templates/${template.id}/${template.preview}`,
  generatedFrom: 'templates/1/template.json',
  generatedAt: new Date().toISOString(),
}
await fs.writeFile(path.join(outputDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`Сформирован manifest шаблона: ${template.id}`)
