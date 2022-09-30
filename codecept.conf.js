exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Playwright: {
      url: 'http://localhost:8080',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'testing-optimization-restaurants-apps',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}