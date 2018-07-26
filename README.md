# webpack-startup

Todo:
- check hot module reloading (webpack.HotModuleReplacementPlugin)
- check if the global public path still works with different folder structure. Otherwise disable it.
- upgrade to eslint 5.x.x when airbnb-base supports it
- upgrade babel-loader from 8.0.0-beta.4 to babel-loader version 8 stable when released.

Todo VueJS Specific:
- vue integration
- `eslint-plugin-vue` for vue linting
- `vue-hot-reload-api` hot module reloading for vuejs.

Todo AEM Specific:
- make the plugin work. Apparently not working with webpack-dev-server. Also needs --watch argument. To test!
- check: https://github.com/infielddigital/aem-webpack-example/issues/16
- check: https://github.com/infielddigital/aem-webpack-example
- check: aem front: https://kevinw.de/aem-front/
- https://www.youtube.com/watch?v=uvett3sZlko

Todo multibrand:
- create multibrand version

To check/test:
- add url-loader for small images
- Test the difference between `babel-minify-webpack-plugin` and `uglifyjs-webpack-plugin`
- Eventually add hashes `-[hash:8]` to files.
- go through [all webpack loaders](https://webpack.js.org/loaders/)
- go through [all webpack plugins](https://webpack.js.org/plugins/)
- const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
- critical CSS

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
