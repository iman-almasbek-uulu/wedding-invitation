import { cpSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const isVercelBuild = process.env.VERCEL === '1' || process.env.VERCEL === 'true'
const templateDir = 'templates/1'

function copyTemplateRuntimeAssets() {
  return {
    name: 'copy-template-runtime-assets',
    writeBundle() {
      const destination = resolve('dist', templateDir)
      mkdirSync(destination, { recursive: true })
      for (const runtimeAsset of ['assets', 'generated', 'demo.json']) {
        cpSync(resolve(templateDir, runtimeAsset), resolve(destination, runtimeAsset), {
          recursive: true,
        })
      }
    },
  }
}

export default defineConfig({
  root: '.',
  // GitHub Pages publishes below /wedding-invitation/; Vercel serves from the domain root.
  base: isVercelBuild ? '/' : '/wedding-invitation/',
  plugins: [copyTemplateRuntimeAssets()],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        shell: 'index.html',
        template1: `${templateDir}/index.html`,
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
})
