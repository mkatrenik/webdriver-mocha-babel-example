exports.config = {

    /**
     * server configurations
     */
    host: 'localhost',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './spec/*.spec.js'
    ],
    exclude: [
        // 'test/spec/multibrowser/**',
        // 'test/spec/mobile/**'
    ],

    /**
     * capabilities
     */
    capabilities: [
        // {
        //     browserName: 'phantomjs'
        // },
        // {
        //     browserName: 'chrome'
        // },
        {
            browserName: 'firefox'
        }
    ],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://webdriver.io',
    waitforTimeout: 20000,
    framework: 'mocha',
    reporter: 'spec',
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        // ui: 'spec',
        timeout: 20000,
        compilers: ['js:babel/register']
    },

    /**
     * hooks
     */
    onPrepare: function() {
        // console.log('let\'s go');
    },
    onComplete: function() {
        // console.log('that\'s it');
    }

};