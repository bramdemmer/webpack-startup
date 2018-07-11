const path = require('path');

module.exports = {
  browsers: ['last 2 versions', 'not ie <= 10'],
  dev: {
    proxy: 'http://localhost:8080/',
    port: 8080,
    open: false,
    overlay: true,
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
  images: {
    outputPath: './images/',
  },
  icons: {
    spriteFilename: './icons/icons.svg',
  },
  fonts: {
    outputPath: './fonts/',
  },
  banner: 'Sitename.com - [file]',
};
