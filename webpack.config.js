const path = require('path');
const webpack = require('webpack');

var bundle  = path.resolve(__dirname, './pages/bundle');
var scripts = path.resolve(__dirname, './pages/scripts');
var styles  = path.resolve(__dirname, './pages/styles');

module.exports = {
    entry: {
      "mainpage":scripts+"/mainpage/index.js",
      "styling":styles+"/_custom.scss"
    },
    output:{
        filename:"[name].bundle.js",
        path:bundle
    },
    module:{
      rules:[
        {
          test: /\.(scss)$/,
          use: [{
            loader: 'style-loader', // inject CSS to page
          }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        }
      ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin( {name: "vendor",  filename: "vendor.bundle.js"}),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })

    ]

};
