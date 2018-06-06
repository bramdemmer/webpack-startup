# webpack-startup

Todo:
- CSS/SCSS sourcemaps
- SVG icons
- multibrand version
- vue integration
- enable hot module reloading

To check/test:
- `vue-hot-reload-api` hot module reloading for vuejs.
- `optimization.splitChunks`
- `optimization.runtimeChunk`
- `optimization.noEmitOnErrors` (on by default in production mode)
- `optimization.concatenateModules` (on by default in production mode)
- `optimization.namedModules` (on by default in production mode)
- Test the difference between `babel-minify-webpack-plugin` and `uglifyjs-webpack-plugin`
- Nice error overlays https://github.com/smooth-code/error-overlay-webpack-plugin

- go through [all webpack loaders](https://webpack.js.org/loaders/)
- go through [all webpack plugins](https://webpack.js.org/plugins/)


For data:
`npm install --save-dev cvs-loader xml-loader`
````javascript
{
  test: /\.(csv|tsv)$/,
  use: [
    'csv-loader'
  ]
},
{
  test: /\.xml$/,
  use: [
    'xml-loader'
  ]
}
````

Info:
- Article on [webpack 4: mode and optimization](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)
- Article on [webpack 4: Code Splitting, chunk graph and the splitChunks optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)
