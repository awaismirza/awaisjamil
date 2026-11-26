import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { directProductPages } from './scripts/direct-product-pages.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), directProductPages()],
})
