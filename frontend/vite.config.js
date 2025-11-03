import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  preview: {
    // Configure preview server to handle SPA routing
    port: 4173,
  },
  build: {
    // Ensure _redirects file is copied to build output
    rollupOptions: {
      output: {
        // Keep the public folder structure
      }
    }
  }
})
