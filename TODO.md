
Todo General:
- include prettier : https://prettier.io/docs/en/eslint.html
- Replace Sass with post-css only. CSS vars etc..
see this design system https://medium.com/codyhouse/create-your-design-system-part-1-typography-7c630d9092bd
- create a different vue CLI version
- more about code splitting: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758

Todo webpack:
- check hot module reloading (webpack.HotModuleReplacementPlugin)
- check if the global public path still works with different folder structure. Otherwise disable it.
- remove unused packages in package.json

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
