const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common');
const config = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: {
        discardComments: { removeAll: true },
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      },
    }),
    new CopyWebpackPlugin([{
      from: config.images.filesLocation,
      to: config.images.outputPath,
      flatten: true,
    }]),
    new ImageminPlugin({ test: /\.(png|jpe?g|gif|svg|webp)$/i }),
  ],
});
