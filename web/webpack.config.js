const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js?|ts?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: false,
    port: 3000,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: false,
    },
  },

  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({ template: './public/index.html' })],
};
