/**
 * base webpack config
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')
const path = require('path')

const threadLoader = require('thread-loader') // 开启线程池预热
threadLoader.warmup(
  {
    // 产生的 worker 数量，默认是cpu核心数 - 1
    // 当 require('os').cpus() 是 undefined时则为 1
    worker: 2,

    // 闲置时定时删除 worker 进程
    // 默认为 500ms
    // 可以设置为无穷大，监视模式(--watch)下可以保持 worker 持续存在
    poolTimeout: 2000
  },
  ['babel-loader']
)

const PUBLIC_PATH = 'http://localhost:9000/'
const isEnvProduction = process.env.NODE_ENV === 'production'
// || process.env.NODE_ENV === 'development'
// const cssLoader = {
//   loader: 'css-loader',
//   options: {
//     url: true,
//     import: true,
//     sourceMap: false,
//     importLoaders: 1,
//     modules: {
//       mode: (resourcePath) => {
//         if (/pure.less$/i.test(resourcePath)) {
//           return 'pure'
//         }

//         if (/global.less$/i.test(resourcePath)) {
//           return 'global'
//         }

//         return 'local'
//       },
//       localIdentName: localClass
//     }
//   }
// }

const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: false,
    modules: {
      mode: (resourcePath) => {
        if (/pure/gi.test(resourcePath)) {
          return 'pure'
        }

        if (/global|theme|Theme/gi.test(resourcePath)) {
          return 'global'
        }

        return 'local'
      },
      localIdentName: `${
        require('../package.json').name
      }_[local]_[hash:base64:5]`
    }
  }
}

const style_resources = {
  loader: 'style-resources-loader',
  options: {
    patterns: path.resolve(__dirname, '../src/Theme/variables/*.less'),
    injector: 'prepend'
  }
}
module.exports = {
  entry: {
    app: {
      import: './src/index.tsx'
      // dependOn: ['common']
    }
    // module: {
    //   import: ['react', 'react-dom', 'react-router-dom', 'axios', 'swr'], //'prop-types'
    //   runtime: 'runtime'
    // },
    // common: {
    //   import: ['./src/utils/index.tsx'],
    //   runtime: 'runtime'
    // }
  },
  output: {
    clean: true,
    library: {
      name: 'Factory',
      type: 'umd'
    },
    path: path.resolve(__dirname, '../dist'), // 将打包好的文件放在此路径下，dev模式中，只会在内存中存在，不会真正的打包到此路径
    publicPath: PUBLIC_PATH, // 文件解析路径，index.html中引用的路径会被设置为相对于此路径
    chunkFilename: 'js/[name][contenthash:4].chunk.js?v=[contenthash:4]',
    filename: (pathData, assetInfo) => {
      return pathData.chunk.name === 'vendors'
        ? 'js/[name].js'
        : 'js/[name][contenthash:4].js?v=[contenthash:4]'
    },
    assetModuleFilename: 'static/images/[contenthash][ext]?v=[contenthash:4]'
  },
  module: {
    rules: [
      {
        // test: /\.(js|jsx|tsx|mjs|ts)?$/i,
        test: /\.(ts|js)x?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus()
            }
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript'
              ]
            }
          }
        ]
      },
      // {
      //   //图片解析
      //   test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      //   // More information here https://webpack.js.org/guides/asset-modules/
      //   type: 'asset/resource',
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 4 * 1024 // 4kb
      //     }
      //   }
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 // 4kb
          }
        },
        generator: {
          filename: 'static/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/font/[hash][ext][query]'
        }
      },
      {
        test: /\.css$/i,
        use: [
          isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          cssLoader,
          'postcss-loader',
          style_resources
        ]
      },
      {
        test: /\.less$/i,
        use: [
          isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          cssLoader,
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: { strictMath: true, javascriptEnabled: true }
            }
          },
          style_resources
        ]
      },
      {
        test: /\.((sa|sc)ss)$/i,
        use: [
          isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          cssLoader,
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                indentWidth: 4,
                outputStyle: 'compressed'
              }
            }
          },
          style_resources
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      // shimming
      _: 'lodash'
    }),
    new webpack.DefinePlugin({
      Mode: JSON.stringify(process.env.NODE_ENV)
    }),
    new LoadablePlugin({ filename: 'stats.json', writeToDisk: true }),
    new HtmlWebpackPlugin({
      title: 'Hello React!',
      showErrors: true,
      cache: true,
      template: './public/index.html',
      filename: 'index.html', //生成的html存放路径，相对于 output.path
      favicon: './public/favicon.png', // 自动把根目录下的favicon.ico图片加入html
      inject: true, // 是否将js放在body的末尾
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash:3].[name].css?v=[contenthash]',
      chunkFilename: 'style/[contenthash:3].[id].css?v=[contenthash]',
      ignoreOrder: false,
      linkType: 'text/css'
    }),
    new ForkTsCheckerWebpackPlugin({
      // async: false,
      typescript: {
        configFile: path.resolve(__dirname, '../tsconfig.json')
      }
    }),
    new EslintWebpackPlugin({
      fix: true,
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules', 'config', 'public']
    }),
    new StyleLintPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      files: '**/*.less',
      failOnError: false,
      quiet: true,
      fix: true,
      customSyntax: 'postcss-less',
      extensions: ['css', 'scss', 'sass', 'less'],
      configBasedir: path.resolve(__dirname, '../')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './public/**/*',
          to: './',
          globOptions: {
            ignore: [
              '**/favicon.png',
              '**/index.html',
              '**/*.less',
              '**/*.sass'
            ]
          },
          noErrorOnMissing: true
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.less', '.css', '.wasm'], // 后缀名自动补全
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@P': path.resolve(__dirname, '../src/Pages'),
      '@A': path.resolve(__dirname, '../src/Api'),
      '@T': path.resolve(__dirname, '../src/Theme'),
      '@TB': path.resolve(__dirname, '../src/Toolbox')
    }
  }
}
