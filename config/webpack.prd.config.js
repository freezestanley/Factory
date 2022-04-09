const { merge } = require('webpack-merge')
const BaseConfig = require('./webpack.base.config')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
// const { extendDefaultPlugins } = require('svgo')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = merge(BaseConfig, {
  mode: 'production',
  stats: {
    children: false // 不输出子模块的打包信息
  },
  devtool: 'nosources-source-map',
  cache: {
    allowCollectingMemory: true
  },
  optimization: {
    removeEmptyChunks: true,
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true, // 是否并行打包
        extractComments: false
      }),
      new CssMinimizerPlugin({
        exclude: /\/node_modules/
      })
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.imageminMinify,
      //     options: {
      //       // Lossless optimization with custom option
      //       // Feel free to experiment with options for better result for you
      //       plugins: [
      //         ['gifsicle', { interlaced: true }],
      //         ['jpegtran', { progressive: true }],
      //         ['optipng', { optimizationLevel: 5 }]
      //         // Svgo configuration here https://github.com/svg/svgo#configuration
      //         // [
      //         //   'svgo',
      //         //   {
      //         //     plugins: [
      //         //       {
      //         //         name: 'removeViewBox',
      //         //         active: false
      //         //       },
      //         //       {
      //         //         name: 'addAttributesToSVGElement',
      //         //         params: {
      //         //           overrides: {
      //         //             attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
      //         //           }
      //         //         }
      //         //       }
      //         //     ]
      //         //   }
      //         // ]
      //       ]
      //     }
      //   }
      // })
    ],
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`
    },
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        common: {
          name: 'commons',
          minChunks: 2,
          priority: -20,
          chunks: 'all',
          maxInitialRequests: 3,
          reuseExistingChunk: true
        }
      }
    }
  },
  cache: {
    // 将缓存类型设置为文件系统
    type: 'filesystem',
    buildDependencies: {
      /* 将你的 config 添加为 buildDependency，以便在改变 config 时获得缓存无效*/
      config: [
        __filename,
        './config/webpack.base.config.js',
        './config/webpack.prd.config.js'
      ]
      /* 如果有其他的东西被构建依赖，你可以在这里添加它们*/
      /* 注意，webpack.config，加载器和所有从你的配置中引用的模块都会被自动添加*/
    },
    // 指定缓存的版本
    version: '2.0.0'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash:3].[name].css?v=[contenthash]',
      chunkFilename: 'style/[contenthash:3].[id].css?v=[contenthash]',
      ignoreOrder: false,
      linkType: 'text/css'
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      cacheId: 'webpack-pwa',
      runtimeCaching: [
        // 配置路由请求缓存
        {
          urlPattern: /.*\.js/, // 匹配文件
          handler: 'NetworkFirst' // 网络优先
        },
        {
          urlPattern: /.*\.[html|css|png|jpg]/, // 匹配文件
          handler: 'StaleWhileRevalidate' // 网络优先
        }
      ]
    })
  ]
})
