/*eslint-disable no-var */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'inline-source-map',

  entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
    if (fs.statSync(path.join(__dirname, dir)).isDirectory()) {
      entries[dir] = path.join(__dirname, dir, 'app.js');
    }
    return entries;
  }, {}),

  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      { test: /(\.jsx|\.js)$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015&presets[]=react' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url?limit=8024&name=images/[name].[ext]' }
    ]
  },

  resolve: {
    alias: {
      'reaui': path.join(__dirname, '..', 'src')
    }
  },

  // Expose __dirname to allow automatically setting basename.
  context: __dirname,
  node: {
    __dirname: true
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
