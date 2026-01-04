import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use absolute base for custom domain (franciskierzkiewicz.dev)
  // This allows favicon absolute paths to work correctly in Chrome
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})

