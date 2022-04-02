const Webpack = require('webpack')
const kill = require('kill-port')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./config/webpack.dev.config')
const { merge } = require('webpack-merge')
const port = 3000
const config = merge(
  {
    entry: [
      'webpack/hot/dev-server.js',
      // Dev server client for web socket transport, hot and live reload logic
      'webpack-dev-server/client/index.js?hot=true&live-reload=true'
    ]
  },
  webpackConfig
)
const compiler = Webpack(config)
const devServerOptions = {
  hot: true,
  ...{
    open: true,
    compress: true
  },
  ...webpackConfig.devServer
}
kill(port, 'tcp')
  .then((resolve, reject) => {
    const server = new WebpackDevServer(
      { hot: true, open: true, compress: true },
      compiler
    )
    const runServer = async () => {
      console.log(`Starting server port:${port}...`)
      await server.start()
    }
    runServer()
  })
  .catch((e) => {
    console.error(`Starting server fail ${e}`)
  })
