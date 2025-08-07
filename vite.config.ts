import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Sviluppo locale
    return {
      plugins: [react()],
      publicDir: 'public',
      base: '/',
      build: {
        outDir: 'dist',
      },
    }
  } else {
    // Build per produzione (GitHub Pages)
    return {
      plugins: [react()],
      publicDir: 'public',
      base: '/Azionesito2/',
      build: {
        outDir: 'dist',
      },
    }
  }
})
