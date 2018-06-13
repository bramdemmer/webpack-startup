const path = require('path');

module.exports = {
  dev: {
    proxy: 'http://localhost:8080/',
    port: 8080,
    open: true,
  },
  contentBase: path.resolve(__dirname, 'dist'),
  entry: {
    main: ['./src/js/index.js'],
    // assets: ['./src/scripts/assets.js'],
  },
  js: {
    filename: './js/[name].js',
  },
  css: {
    filename: './css/[name].css',
  },
  html: {
    name: '[name].[ext]',
  },
  images: {
    outputPath: './images/',
  },
  icons: {
    spriteFilename: './icons/icons.svg',
  },
  fonts: {
    outputPath: './fonts/',
  },
  banner: 'Sitename - [file]',
};
