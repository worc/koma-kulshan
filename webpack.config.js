const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  mode: NODE_ENV,

  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',

  devServer: {
    contentBase: 'dist/',
    historyApiFallback: true,
  },

  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
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
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }),
    new BundleAnalyzerPlugin({
      logLevel: 'error',
      analyzerMode: 'static',
      reportFilename: path.join(__dirname, `.bundle_analysis.html`),
      openAnalyzer: false,
    }),
  ],

  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
  },
}
