var webpack = require('webpack')
const DEBUG = process.env.NODE_ENV !== 'production'

const plugins = []
if (!DEBUG) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
          warnings: false
      }
  }))
}

module.exports = {
    output: {
        library: '<%= appname %>',
        libraryTarget: 'umd',
        filename: 'index.js',
        chunkFilename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    resolve: {
        extensions: ['', '.json', '.node', '.js', '.jsx']
    },
    node: {
        Buffer: false
    },
    plugins: plugins,
};
