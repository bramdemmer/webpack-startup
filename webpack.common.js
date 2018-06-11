const path = require('path');
// const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
// const env = process.env.NODE_ENV;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: {
    main: ['./src/js/index.js'],
    // assets: ['./src/scripts/assets.js'],
  },
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: './dist/'
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
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // importLoaders: 1,
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
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /icons/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './images/',
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
              spriteFilename: './icons/icons.svg',
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
            outputPath: './fonts/',
          },
        }],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader', // tells webpack the name of the file we want to create.
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'extract-loader',
            // options: {
            //   publicPath: './',
            // },

            // makes it a seperate file and does not include it in the main-bundle.js
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
    new CleanWebpackPlugin('dist', {}),
    new MiniCSSExtractPlugin({
      filename: './css/[name].css',
    }),
  ],
};
