const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev",
    frontUrl: "https://front.serverest.dev",
    setupNodeEvents(on, config) {
    }
  },
});