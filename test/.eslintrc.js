/**
 * ESLint configuration for the `test` directory
 */
module.exports = {
    "env": {
        // adds all of the Mocha testing global variables such as `describe` and `it`
        "mocha": true,
    },
    "rules": {
        // Mocha recommend using anonymous functions instead of arrow callback
        // in order to access mocha context. So weed to disable those rules.
        // https://mochajs.org/#arrow-functions
        "prefer-arrow-callback": "off",
        "func-names": "off"
    }
};