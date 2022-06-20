const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')
const webpack = require('webpack')
const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const threadLoader = require('thread-loader') // 开启线程池预热
const jsWorkerPool = {
  // options

  // 产生的 worker 的数量，默认是 (cpu 核心数 - 1)
  // 当 require('os').cpus() 是 undefined 时，则为 1
  workers: 2,
  // 闲置时定时删除 worker 进程
  // 默认为 500ms
  // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
  poolTimeout: 2000
}
const cssWorkerPool = {
  // 一个 worker 进程中并行执行工作的数量
  // 默认为 20
  workerParallelJobs: 2,
  poolTimeout: 2000
}
threadLoader.warmup(jsWorkerPool, ['babel-loader'])
threadLoader.warmup(cssWorkerPool, ['css-loader', 'postcss-loader'])
module.exports = merge(BaseConfig, {
  mode: 'development',
  stats: { colors: true },
  devtool: 'eval-cheap-module-source-map',
  cache: {
    type: 'memory'
  },
  devServer: {
    hot: true,
    open: true,
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
    new ReactRefreshWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'ccomponent',
      filename: 'remoteEntry.js',
      exposes: {
        '/Footer': './src/Components/Footer/index.tsx'
      }
    })
  ].filter(Boolean)
})
