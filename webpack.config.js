
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/build/",
    pathinfo: true,
    filename: "index.js",
  },
  context: path.resolve(__dirname),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname),
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            cacheDirectory: true,
          }
        }
      },
    ]
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),

    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ]
};
