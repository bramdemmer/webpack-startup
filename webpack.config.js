const path = require('path');

module.exports = {
  entry: {
    main: ['./app/assets/js/index.js'],
    // assets: ['./src/scripts/assets.js'],
  },
  output: {
    path: path.resolve(__dirname, 'app/dist'), // needs to be an absolute location
    filename: 'js/[name].js',
    publicPath: '/dist/', // don't forget the / at the end and at the start or it won't work!
  },
  browsers: ['last 2 versions', 'not ie <= 10'],
  dev: {
    publicPath: '/dist/', // don't forget the / at the end and at the start or it won't work!
    contentBase: path.resolve(__dirname, 'app'), // server content base location
    proxy: '',
    port: 8080,
    openBrowser: false,
    errorsInOverlay: true,
    debugMode: false,
    useHMR: true,
  },
  css: {
    filename: 'css/[name].css',
  },
  images: {
    outputPath: 'images/',
  },
  icons: {
    spriteFilename: 'icons/icons.svg',
  },
  fonts: {
    outputPath: 'fonts/',
  },
  banner: 'Sitename.com - [file]',
};
