const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.ENV,
  entry: path.join(__dirname, 'src/index.jsx'),
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnError: process.env.ENV === 'production',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader',
      },
      {
        test: /\.svg$/,
        use: 'react-svg-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'static/assets'),
        to: path.join(__dirname, 'dist/assets'),
      },
      {
        from: path.join(__dirname, 'static/index.html'),
        to: path.join(__dirname, 'dist/index.html'),
      },
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      PRODUCTION: process.env.ENV === 'production',
    }),
  ],
};
