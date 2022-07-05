const Webpack = require('webpack')
const kill = require('kill-port')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./config/webpack.dev.config')

const { merge } = require('webpack-merge')
const port = webpackConfig.devServer.port
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
  open: true,
  compress: true,
  ...webpackConfig.devServer
}

const server = new WebpackDevServer(devServerOptions, compiler)
const runServer = async () => {
  console.log(`Starting server port:${port}...`)
  await server.start()
}

kill(port, 'tcp')
  .then((resolve, reject) => {
    runServer()
  })
  .catch((e) => {
    console.error(`Starting server fail ${e}`)
    runServer()
  })
