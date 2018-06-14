const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const config = require('./webpack.config');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: config.entry,
  output: {
    filename: config.js.filename,
    path: config.contentBase,
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
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
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
          // {
          //   loader: 'svgo-loader',
          //   options: {
          //     plugins: [
          //       { removeTitle: true },
          //       { convertColors: { shorthex: false } },
          //       { convertPathData: false },
          //     ],
          //   },
          // },
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
    new SpriteLoaderPlugin(),
    new StyleLintPlugin({
      fix: true,
    }),
    new CssUrlRelativePlugin(),
    new CleanWebpackPlugin(config.contentBase, {}),
    new MiniCssExtractPlugin({
      filename: config.css.filename,
    }),
  ],
};
