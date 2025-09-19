import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Determina la base in base alla piattaforma di deploy
  const isVercel = process.env.VERCEL === '1'
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
  
  let base = '/'
  if (isGitHubPages && !isVercel) {
    base = '/Azionesito2/'
  }
  
  return {
    plugins: [react()],
    publicDir: 'public',
    base: base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    server: {
      port: 5173,
      host: true,
    },
  }
})
