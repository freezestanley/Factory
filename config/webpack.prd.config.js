const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')

module.exports = merge(BaseConfig, {
  mode: 'production',
  stats: {
    children: false // 不输出子模块的打包信息
  }
})
