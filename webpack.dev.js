const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  watch: true,
  devServer: {
    contentBase: 'dist', // Tell the server where to serve content from. This is only necessary if you want to serve static files.
    // overlay: true,
    open: false,
    port: 8080,
    stats: 'errors-only',


    // Don't refresh if hot loading fails. Good while
    // implementing the client interface.
    // hotOnly: true,

    // If you want to refresh on errors too, set
    // hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development
      host: 'localhost',
      port: 3000,
      // proxy the Webpack Dev Server endpoint through BrowserSync
      proxy: 'http://localhost:8080/',
    }, {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false,
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
});
