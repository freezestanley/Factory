module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        stage: 3,
        browsers: [
          'last 1 version',
          '> 1%',
          'maintained node versions',
          'not dead'
        ]
      }
    ]
  ]
}
