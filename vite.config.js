import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/MKPbersih/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kebijakan: resolve(__dirname, 'kebijakan.html'),
        gratifikasi: resolve(__dirname, 'gratifikasi.html'),
        pengawasan: resolve(__dirname, 'pengawasan.html'),
        integritas: resolve(__dirname, 'integritas.html'),
        lapor: resolve(__dirname, 'lapor.html'),
      },
    },
  },
})
