import { defineConfig } from 'vite'

const isVercelBuild = process.env.VERCEL === '1' || process.env.VERCEL === 'true'

export default defineConfig({
  root: '.',
  // GitHub Pages publishes below /wedding-invitation/; Vercel serves from the domain root.
  base: isVercelBuild ? '/' : '/wedding-invitation/',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        shell: 'index.html',
        invitation: 'invitation.html',
        'askar-aizhan': 'askar-aizhan/index.html',
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },
})
