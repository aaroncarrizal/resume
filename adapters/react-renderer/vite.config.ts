import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

const dir = import.meta.dirname

export default defineConfig({
  root: dir,
  plugins: [tailwindcss(), react()],
  build: {
    outDir: resolve(dir, '../../output'),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    fs: {
      allow: [dir, resolve(dir, '../..')],
    },
    watch: {
      followSymlinks: true,
      ignored: ['!**/node_modules/@resume/**'],
    },
  },
})
