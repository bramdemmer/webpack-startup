const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const config = require('./webpack.config');
const common = require('./webpack.common');

const useBrowserSync = process.env.browsersync === 'enable';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  watch: useBrowserSync,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: false,
    port: 8080,
    stats: 'errors-only',
    noInfo: true,
    // overlay: true,
    // hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
  ],
});

if (useBrowserSync) {
  module.exports.plugins.push(new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    proxy: 'http://localhost:8080/',
    open: true,
  }, {
    reload: false,
  }));
}

