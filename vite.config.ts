import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'React Vite App',
        short_name: 'ViteApp',
        description: 'A React application built with Vite',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*$/, // Example: caching an external API
            handler: 'NetworkFirst', // Network-first strategy
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
              },
            },
          },
          {
            urlPattern:
              /\.(?:js|css|html|png|jpg|jpeg|svg|woff2|woff|ttf|eot|otf)$/,
            handler: 'CacheFirst', // Cache-first strategy for assets
            options: {
              cacheName: 'static-assets',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for one year
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/styles',
      '@features': '/src/features',
      '@assets': '/src/assets',
      '@page': '/src/page',
      '@components': '/src/components',
      '@context': '/src/context',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@layout': '/src/layout',
      '@lib': '/src/lib',
      '@services': '/src/services',
      '@test': '/src/test',
      '@utils': '/src/utils',
    },
  },
});
