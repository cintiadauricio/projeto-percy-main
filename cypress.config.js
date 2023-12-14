const { defineConfig } = require("cypress");

module.exports = defineConfig({
  setupNodeEvents(on, config) {
    return on, config;
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalRunAllSpecs: true,
  },
  video: false,
  chromeWebSecurity: false,
  modifyObstructiveCode: false,
  viewportWidth: 1440,
  viewportHeight: 900,
});
