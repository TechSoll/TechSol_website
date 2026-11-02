import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3206,
    strictPort: true,
    proxy: {
      '/api/datetime': {
        target: 'https://python-app-vwnm.onrender.com',
        changeOrigin: true,
        rewrite: () => '/datetime',
        secure: true,
      },
    },
  },
})
