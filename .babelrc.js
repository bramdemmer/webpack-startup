const config = require('./webpack.config');

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: config.browsers
        },
        debug: config.dev.debugMode,
        useBuiltIns: "usage",
        modules: false
      }
    ]
  ]
};
