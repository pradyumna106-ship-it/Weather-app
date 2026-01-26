import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/weather': {  // Proxy /weather/* to backend
        target: 'http://localhost:8083',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
