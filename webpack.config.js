const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: process.env.ENV,
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader'
      },
      {
        test: /\.svg$/,
        use: 'react-svg-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: __dirname + '/static/assets',
        to: __dirname + '/dist/assets',
      },
      {
        from: __dirname + '/static/index.html',
        to: __dirname + '/dist/index.html',
      },
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
    }),
    new webpack.DefinePlugin({
      PRODUCTION: true
      // PRODUCTION: process.env.ENV === 'production'
    })
  ]
};
