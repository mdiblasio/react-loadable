const path = require('path');
const webpack = require('webpack');
const DefinePlugin = require('webpack').DefinePlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LoadablePlugin = require('@loadable/webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const DIST_PATH = path.resolve(__dirname, 'dist')
const production = process.env.NODE_ENV === 'production';
const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const getConfig = target => ({
  name: target,

  mode: development ? 'development' : 'production',

  target,
  entry: target === 'node' ? {
    server: './server/server.jsx',
  } : {
    main: './src/index.jsx',
    // B: './src/components/B.jsx',
    // C: './src/components/C.jsx',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },

  module: {
    rules: [{
      test: /\.(jsx|es6)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },

  externals: target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,

  output: {
    filename: target === 'node' ? 'server.js' : '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.join(DIST_PATH, target),
    publicPath: `/`,
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   'base': { 'href': 'http://localhost:8080/' },
    // }),
    new LoadablePlugin(),
    // new BundleAnalyzerPlugin(),
  ],
})

module.exports = [
  getConfig('web'),
  getConfig('node')
];