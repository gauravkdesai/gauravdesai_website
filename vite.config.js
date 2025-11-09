import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for local development - use '/' for localhost
  // For GitHub Pages deployment, this will be overridden by the build script
  // For custom domain, use: '/'
  base: '/',
  // Build configuration for GitHub Pages
  build: {
    outDir: 'dist',
  },
})

