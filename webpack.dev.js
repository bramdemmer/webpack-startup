const webpack = require('webpack');
const merge = require('webpack-merge');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.config');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    contentBase: config.contentBase,
    open: config.dev.openBrowser,
    port: config.dev.port,
    stats: config.dev.debugMode ? 'normal' : 'minimal',
    useLocalIp: true,
    host: '0.0.0.0',
    overlay: config.dev.errorsInOverlay,
    // historyApiFallback: true,
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
