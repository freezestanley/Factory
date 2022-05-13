const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: 'ccomponent',
      filename: 'remoteEntry.js',
      exposes: {
        '/Footer': './src/Components/Footer/index.tsx'
      }
    })
  ]
})
