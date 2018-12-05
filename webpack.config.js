const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    }, {
      test: /.html$/,
      use: 'html-loader'
    }],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  mode: process.env.NODE_ENV || 'development'
}