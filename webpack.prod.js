const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'production',
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    new UglifyJSPlugin()
  ]
};
