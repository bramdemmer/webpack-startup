const path = require('path');
const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    main: ['./src/js/index.js'],
  },
  output: {
    filename: './js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:12].[ext]',
            outputPath: './images/',
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:12].[ext]',
            outputPath: './fonts/',
            publicPath: '../fonts/',
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          // {
          //   loader: 'file-loader', // tells webpack the name of the file we want to create.
          //   options: {
          //     name: '[name].[ext]'
          //   }
          // },
          // {
          //   loader: 'extract-loader', // makes it a seperate file and does not include it in the main-bundle.js
          //   options: {
          //     publicPath: './'
          //   }
          // },
          {
            loader: 'html-loader', // Does the linting and passes it to the extract loader
            // options: {
            //   attrs: ['img:src']
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin('dist', {}),
    new MiniCSSExtractPlugin({
      filename: './css/[name].[contenthash].css',
    }),
  ]
};
