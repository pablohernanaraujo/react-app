const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      "Theme": path.resolve(__dirname, 'src/theme'),
      "Ui": path.resolve(__dirname, 'src/ui'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
  ],
  devServer: {
    open: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true,
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    }
  }
};
