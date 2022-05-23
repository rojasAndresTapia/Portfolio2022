const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, './src'),
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.css'],
  },
  entry: {
    app: ['./index.tsx'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      scriptLoading: 'blocking', // Load the scripts correctly
    }),
    new CleanWebpackPlugin(),
  ],
  stats: {
    errorDetails: true,
  },
};
