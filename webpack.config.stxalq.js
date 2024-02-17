const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  name: 'koma-kulshan',
  mode: NODE_ENV,

  devtool: 'source-map',

  entry: {
    'koma-kulshan': path.resolve(__dirname, 'src/index.js'),
  },

  output: {
    clean: true,
    path: path.resolve(__dirname, '.stxalq'),
    filename: 'static/[name].[contenthash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env', '@babel/preset-react' ],
          },
        },
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'file-loader',
          }
        ],
      },
    ]
  },

  plugins: [
    new WebpackManifestPlugin({
      fileName: path.join(__dirname, '.stxalq/manifest/koma-kulshan.json'),
    }),
    new BundleAnalyzerPlugin({
      logLevel: 'error',
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, `.bundle_analysis.html`),
      openAnalyzer: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: 'views', to: 'views' },
      ]
    })
  ],
}
