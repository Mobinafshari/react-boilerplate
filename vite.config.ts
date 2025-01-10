import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor'; // Separate React-related code
            }
            return 'vendor'; // General vendor chunk
          }
        },
      },
    },
  },
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
