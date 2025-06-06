import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      // eslint-disable-next-line no-undef
      '@':path.resolve(__dirname,'./src')
    }
  },
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  esbuild: {
    pure: ['console.log'],
    minify: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 或 "modern"
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
})
