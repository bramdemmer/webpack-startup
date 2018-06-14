const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('./webpack.config');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
    new webpack.BannerPlugin({
      include: /\.(js|css)/,
      banner: config.banner,
    }),
  ],
});
