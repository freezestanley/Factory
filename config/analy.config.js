const base = require('./webpack.prd.config')
const { merge } = require('webpack-merge')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let prd = merge(base, {
  plugins: [new BundleAnalyzerPlugin()]
})

// const smp = new SpeedMeasurePlugin()
// prd = smp.wrap(prd)
module.exports = prd
