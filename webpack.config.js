const path = require('path');
const webpack = require('webpack');

var bundle = path.resolve(__dirname, './pages/bundle');
var scripts = path.resolve(__dirname, './pages/scripts');

module.exports = {
  entry: {
    "mainpage": scripts + "/mainpage/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: bundle
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
