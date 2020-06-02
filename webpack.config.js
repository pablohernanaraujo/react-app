const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      "Theme": path.resolve(__dirname, 'src/theme'),
      "Ui": path.resolve(__dirname, 'src/ui')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    open: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
