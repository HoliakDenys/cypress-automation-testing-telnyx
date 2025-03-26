import { defineConfig } from 'cypress'
require('dotenv').config();

export default defineConfig({
  projectId: 'e6cczb',
  e2e: {
    specPattern: 'cypress/e2e/**/*.ts',
    baseUrl: process.env.BASE_URL,
  },
})