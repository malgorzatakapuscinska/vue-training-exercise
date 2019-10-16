const Fs = require('fs')
const Path = require('path')
const Webpack = require('webpack')
const merge = require('webpack-merge')
const globImporter = require('node-sass-glob-importer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
require('dotenv-flow').config()

const common = require('./webpack.common.js')

const pages = Fs
  .readdirSync(Path.resolve('./src'))
  .filter(path => path.endsWith('.html'))
  .filter(path => process.env.NODE_ENV === 'production' ? !path.startsWith('_') : true)
  // .filter(path => process.env.NODE_ENV === 'production' ? path !== 'index.html' : true)

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  output: {
    filename: 'js/[name].js',
    path: Path.resolve(__dirname, '../docs'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new Webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../src/images'), to: 'images' },
    ]),
    ...pages.map(
      page =>
      new HtmlWebpackPlugin({
        meta: {
          viewport: 'width=device-width, initial-scale=1',
        },
        filename: `${page}`,
        template: Path.resolve(__dirname, `../src/${page}`),
        title: 'vue',
      })
    ),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter(),
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp|svg)$/i,
        include: Path.join(__dirname, '../src/images'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: url => url.replace('/src/', ''),
          },
        },
      },
      {
        test: /\.html$/,
        // include: Path.resolve(__dirname, '../src/components'),
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
            },
          },
          // {
          //   loader: 'string-replace-loader',
          //   options: {
          //     flags: 'g',
          //     replace: '',
          //     search: '[\.]?/src/',
          //   },
          // },
        ],
      },
    ],
  },
})
