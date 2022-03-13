const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(BaseConfig, {
  mode: 'development',
  stats: { colors: true },
  devtool: 'eval-cheap-module-source-map',
  cache: {
    type: 'memory'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../dist')
    },
    compress: true,
    port: 9000,
    client: {
      progress: true
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
