import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  base: './',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  }
})
