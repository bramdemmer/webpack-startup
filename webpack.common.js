const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('./webpack.config');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: config.output.path,
    publicPath: config.output.publicPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          emitError: true,
          emitWarning: true,
          fix: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development' ? 'inline' : false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jp(e*)g|gif)$/,
        exclude: /icons/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: config.images.outputPath,
          },
        }],
      },
      {
        test: /\.svg$/,
        include: /icons/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: config.icons.spriteFilename,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                // { removeViewBox: true },
                { removeTitle: true },
                { convertPathData: false },
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: config.fonts.outputPath,
          },
        }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'extract-loader',
            // options: {
            //   publicPath: './',
            // },
          },
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html",
    // }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new StyleLintPlugin({
      fix: true,
    }),
    new CssUrlRelativePlugin(),
    new CleanWebpackPlugin(config.output.path, {
      verbose: config.dev.debugMode,
    }),
    new MiniCssExtractPlugin({
      filename: config.css.filename,
    }),
  ],
};

if (config.dev.debugMode) {
  module.exports.plugins.push(new BundleAnalyzerPlugin());
}
