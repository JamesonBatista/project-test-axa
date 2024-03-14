const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fne6ez",
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    experimentalStudio: true,
    trashAssetsBeforeRuns: true,
    testIsolation: false,
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: false
  },
  video: false,
  // viewportHeight: 800,
  // viewportWidth: 900,
});
