const path = require('path');

module.exports = {
  entry: {
    main: ['./app/assets/js/index.js'],
    // assets: ['./src/scripts/assets.js'],
  },
  output: {
    path: path.resolve(__dirname, 'app/dist'), // This needs to be an absolute location
    publicPath: 'dist/',
    filename: 'js/[name].js',
  },
  browsers: ['last 2 versions', 'not ie <= 10'],
  dev: {
    publicPath: '/dist/', // Must have a / at the start and the end of the path
    contentBase: path.resolve(__dirname, 'app'), // The server content base location
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
