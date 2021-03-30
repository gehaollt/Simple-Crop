module.exports = {
  entry: {
    'index.min': './index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
    library: {
      root: 'MobileCrop',
      commonjs: 'mobilecrop',
      amd: 'mobilecrop',
    },
    libraryTarget: 'umd',
  },
  devtool: '#source-map',
  watch: true,
}
