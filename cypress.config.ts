import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    baseUrl: 'http://localhost:5137',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
