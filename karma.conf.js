const process = require('process');
const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();
// Karma configuration
// Generated on Sun Jun 16 2019 19:26:04 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-ajax', 'jasmine-jquery', 'jasmine', "karma-typescript"],
    // list of files / patterns to load in the browser
    files: [
      'source/javascripts/displayHelper.ts',
      'source/javascripts/mapHelper.ts',
      'source/javascripts/leaflet_awesome_number_markers.ts',
      { pattern: 'spec/**/*.ts'},
      { pattern: 'source/map.html.haml'},
      { pattern: 'spec/fixtures/**',
        watched: true,
        served:  true,
        included: false}
    ],


    // list of files / patterns to exclude
    exclude: [
    ],

    include: [
      "./node_modules/geojson/**/*",
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.ts": ["karma-typescript", "sourcemap"],
      "source/map.html.haml": ["haml", "html2js"]
    },
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['HeadlessChrome'],
    customLaunchers:{
      HeadlessChrome:{
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
