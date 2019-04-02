exports.config = {

    specs: [
        './test.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [
        {

            maxInstances: 1,

            browserName: 'chrome'
        }
    ],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 50000,
    connectionRetryTimeout: 50000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['dot', 'spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 200000
    },

};