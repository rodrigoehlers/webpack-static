const prod = process.env.NODE_ENV === 'prod';
const path = require('path');
const webpack = require('webpack');

const config = {
  mode: prod ? 'production' : 'development',
  entry: ['@babel/polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9898,
  },
};

if (prod) config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
module.exports = config;
