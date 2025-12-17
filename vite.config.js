import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base so assets load correctly on both:
  // - GitHub Pages project pages (e.g. /Developer-Portfolio/)
  // - Custom domains at root (e.g. https://franciskierzkiewicz.dev/)
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})

