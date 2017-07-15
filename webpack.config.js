const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});


module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {

    rules: [

      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.scss$/,

        use: extractSass.extract({

          use: [

            {
              loader: "css-loader"
            },

            {
              loader: "sass-loader"
            }

          ],

          fallback: "style-loader"

        })

      }

    ]

  },

  plugins: [

    extractSass,

    new HTMLWebpackPlugin()

  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'build')
  }

}
