import { defineConfig } from 'cypress'
require('dotenv').config();

export default defineConfig({
  projectId: 'e6cczb',
  e2e: {
    defaultBrowser: "electron",
    specPattern: 'cypress/e2e/**/*.ts',
    baseUrl: process.env.BASE_URL,
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      if (config.browser && config.browser.name === 'edge') {
        config.viewportWidth = 1920;
        config.viewportHeight = 1080;
      } else if (config.browser && config.browser.name === 'chrome') {
        config.viewportWidth = 1366;
        config.viewportHeight = 768;
      }
      return config;
    },
  },
});