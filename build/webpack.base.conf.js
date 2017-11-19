'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const publicPath=process.env.NODE_ENV === 'production'
    ? config.build.assetsPublicPath
    : config.dev.assetsPublicPath;

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/index.ts'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath
  },
  resolve: {
    extensions: ['.ts', '.js'],//, '.json', '.html','.scss'
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/],
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {

                esModule: true,
            }
        },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
    plugins: [
        new ExtractTextPlugin({
            filename: path.join(publicPath,'styles.css'),
            allChunks: true
        }),
    ],

}
