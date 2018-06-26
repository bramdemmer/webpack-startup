# webpack-startup

Todo:
- check hot module reloading
- multibrand version

Todo VueJS Specific:
- vue integration
- `eslint-plugin-vue` for vue linting
- `vue-hot-reload-api` hot module reloading for vuejs.

Todo AEM Specific:
- integrate aem-sync-webpack-plugin

To check/test:
- add url-loader for small images
- Test the difference between `babel-minify-webpack-plugin` and `uglifyjs-webpack-plugin`
- Eventually add hashes `-[hash:8]` to files.
- go through [all webpack loaders](https://webpack.js.org/loaders/)
- go through [all webpack plugins](https://webpack.js.org/plugins/)
- const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
- critical CSS

Info:
- Article on [webpack 4: mode and optimization](https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a)
- Article on [webpack 4: Code Splitting, chunk graph and the splitChunks optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)


favicons:
````javascript

      {
        test: /\.(svg|png|ico|xml|json|webmanifest)$/,
        loader: 'file-loader',
        include: /favicons/,
        options: {
          name: '[name].[ext]',
          outputPath: './../favicons',
        },
      },
````


SVGO options to test for icons:

````javascript
// removeViewBox: false,
// removeUselessStrokeAndFill: false,
// cleanupAttrs: false,
// removeDoctype: false,
// cleanupAttrs: false,
// removeDoctype: false,
// removeXMLProcInst: false,
// removeComments: false,
// removeMetadata: false,
// removeTitle: false,
// removeDesc: false,
// removeUselessDefs: false,
// removeXMLNS: false,
// removeEditorsNSData: false,
// removeEmptyAttrs: false,
// removeHiddenElems: false,
// removeEmptyText: false,
// removeEmptyContainers: false,
// removeViewBox: false,
// cleanupEnableBackground: false,
// minifyStyles: false,
// convertStyleToAttrs: false,
// convertColors: false,
// convertPathData: false,
// convertTransform: false,
// removeUnknownsAndDefaults: false,
// removeNonInheritableGroupAttrs: false,
// removeUselessStrokeAndFill: false,
// removeUnusedNS: false,
// cleanupIDs: false,
// cleanupNumericValues: false,
// cleanupListOfValues: false,
// moveElemsAttrsToGroup: false,
// moveGroupAttrsToElems: false,
// collapseGroups: false,
// removeRasterImages: false,
// mergePaths: false,
// convertShapeToPath: false,
// sortAttrs: false,
// removeDimensions: false,
// removeAttrs: false,
// removeElementsByAttr: false,
// addClassesToSVGElement: false,
// addAttributesToSVGElement: false,
// removeStyleElement: false,
// removeScriptElement: false,
````
