# webpack-startup

Todo:
- check hot module reloading (webpack.HotModuleReplacementPlugin)
- check if the global public path still works with different folder structure. Otherwise disable it.
- upgrade babel-loader from 8.0.0-beta.x to babel-loader version 8 stable when released.

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
