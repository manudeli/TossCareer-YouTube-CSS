const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        // 순서가 뒤에서 부터 시작함
        use: [
          'style-loader', // 3. styles를 DOM에 삽입
          'css-loader', // 2. css를 commonjs로 변환
          'sass-loader', // 1. scss를 css로 변환
        ],
      },
    ],
  },
});
