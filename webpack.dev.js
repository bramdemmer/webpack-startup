const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  watch: true,
  devServer:  {
    contentBase: 'dist', // Tell the server where to serve content from. This is only necessary if you want to serve static files.
    overlay: true,
    open: true,
    port: 8080,
    stats: {
      colors: true
    }
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('development')
    //   }
    // })
  ]
});
