const Webpack = require('webpack')
const kill = require('kill-port')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./config/webpack.dev.config')
const port = 3000
const compiler = Webpack(webpackConfig)
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
    const server = new WebpackDevServer(devServerOptions, compiler)
    const runServer = async () => {
      console.log(`Starting server port:${port}...`)
      await server.start()
    }
    runServer()
  })
  .catch((e) => {
    console.error(`Starting server fail ${e}`)
  })
