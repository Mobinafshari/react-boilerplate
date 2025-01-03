import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
