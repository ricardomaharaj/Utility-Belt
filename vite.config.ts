import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    Icons({ compiler: 'jsx', jsx: 'react' }),
    VitePWA({
      manifest: {
        short_name: 'Utility Belt',
        name: 'Utility Belt',
        description: 'Utility Belt',
        icons: [
          {
            src: 'logo16.png',
            type: 'image/png',
            sizes: '16x16',
          },
          {
            src: 'logo32.png',
            type: 'image/png',
            sizes: '32x32',
          },
          {
            src: 'logo192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'logo512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#000000',
      },
      registerType: 'autoUpdate',
    }),
  ],
})
