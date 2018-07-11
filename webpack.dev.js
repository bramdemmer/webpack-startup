const webpack = require('webpack');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.config');
const common = require('./webpack.common');

const useBrowserSync = process.env.browsersync === 'enable';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  watch: useBrowserSync,
  devServer: {
    contentBase: config.contentBase,
    open: config.dev.open,
    port: config.dev.port,
    stats: 'errors-only',
    noInfo: true,
    overlay: config.dev.overlay,
    // hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    // new BundleAnalyzerPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
  ],
});

if (useBrowserSync) {
  module.exports.plugins.push(new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    proxy: config.dev.proxy,
    open: config.dev.open,
  }, {
    reload: false,
  }));
}
