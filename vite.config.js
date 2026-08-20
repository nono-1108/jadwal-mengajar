import { defineConfig } from 'vite'
import { resolve } from 'path'
// Tambahkan plugin vue() di sini jika kamu menggunakan Vue

export default defineConfig({
    // ... (konfigurasi plugin kamu yang sudah ada)
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                admin: resolve(__dirname, 'admin.html'),
                adminLogin: resolve(__dirname, 'admin-login.html')
            }
        }
    }
})
