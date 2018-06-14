const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('./webpack.config');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|svg|jp(e*)g|gif)$/,
        exclude: /icons/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre',
      },
    ],
  },
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
