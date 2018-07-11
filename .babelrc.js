const config = require('./webpack.config');

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: config.browsers
        },
        debug: true,
        useBuiltIns: "usage",
        modules: false
      }
    ]
  ]
};
