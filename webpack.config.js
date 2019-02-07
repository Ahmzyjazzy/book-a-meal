const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  //entry
  entry: './src/index.js',

  //ouput
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index_bundle.js'
  },

  //modules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader','css-loader','sass-loader'
          ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]

};