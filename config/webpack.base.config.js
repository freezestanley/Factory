/**
 * base webpack config
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const PUBLIC_PATH = '/'
module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, '../dist'), // 将打包好的文件放在此路径下，dev模式中，只会在内存中存在，不会真正的打包到此路径
    publicPath: PUBLIC_PATH, // 文件解析路径，index.html中引用的路径会被设置为相对于此路径
    filename: '[name]_[contenthash:8].js' // 编译后的文件名字
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
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
      }
    ]
  },
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.less', '.css', '.wasm'], // 后缀名自动补全
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  mainFields: ['browser', 'module', 'main'],
  cache: {
    // 将缓存类型设置为文件系统
    type: 'filesystem',
    buildDependencies: {
      /* 将你的 config 添加为 buildDependency，以便在改变 config 时获得缓存无效*/
      config: [__filename]
      /* 如果有其他的东西被构建依赖，你可以在这里添加它们*/
      /* 注意，webpack.config，加载器和所有从你的配置中引用的模块都会被自动添加*/
    },
    // 指定缓存的版本
    version: '1.0'
  }
}
