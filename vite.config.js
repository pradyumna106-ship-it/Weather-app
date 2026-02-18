import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/weather': {  // Proxy /weather/* to backend
        target: 'https://weather-api-production-f78d.up.railway.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
