import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  // GitHub Pages publishes this repository below /wedding-invitation/.
  base: '/wedding-invitation/',

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
