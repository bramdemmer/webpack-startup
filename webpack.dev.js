const webpack = require('webpack');
const merge = require('webpack-merge');
// const AEMClientlibWebpackPlugin = require('aem-clientlib-webpack-plugin').default;
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const config = require('./webpack.config');
const common = require('./webpack.common');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: config.dev.contentBase,
    publicPath: config.dev.publicPath,
    open: config.dev.openBrowser,
    port: config.dev.port,
    stats: config.dev.debugMode ? 'normal' : 'minimal',
    useLocalIp: true,
    host: config.dev.host,
    overlay: config.dev.errorsInOverlay,
    watchContentBase: true,
    hot: config.dev.useHMR,
    // historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // = for better HMR console messages
  ],
});

if (config.dev.aem.enabled) {
  console.log('AEM version enabled.');
  // const clientlib = require('./clientlib.config.js');
  module.exports.plugins.push(
    // new AEMClientlibWebpackPlugin(clientlib),
    new WriteFileWebpackPlugin(), // writes down files so that aem can use it.
  );
}
