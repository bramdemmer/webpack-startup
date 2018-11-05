const path = require('path');
require('dotenv').config();

module.exports = {
  entry: {
    main: ['@babel/polyfill', './app/assets/js/index.js'],
    // assets: ['./src/scripts/assets.js'],
  },
  output: {
    path: path.resolve(__dirname, 'app/dist'), // This needs to be an absolute location
    publicPath: 'dist/',
    filename: 'js/[name].js',
  },
  browsers: ['last 2 versions', 'not ie <= 10'],
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
  alias: {
  },
  dev: {
    publicPath: '/dist/', // Must have a / at the start and the end of the path
    contentBase: path.resolve(__dirname, 'app'), // The server content base location
    proxy: '',
    host: process.env.DEV_HOST || '0.0.0.0',
    port: process.env.DEV_PORT || 8080,
    openBrowser: false,
    errorsInOverlay: true,
    debugMode: false,
    useHMR: true,
    openBundleAnalyser: false,
    aem: {
      enabled: true,
      targets: process.env.AEM_TARGETS || ['http://admin:admin@localhost:4502', 'http://admin:admin@localhost:4503'],
      watchDir: './app',
      exclude: '**/node_modules/**',
    },
  },
};
