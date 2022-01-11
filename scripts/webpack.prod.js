const {
  merge
} = require('webpack-merge');
const path = require('path');
const WebpackBase = require('./webpack.base.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = merge(WebpackBase, {
  mode: 'production',
  module: {
    rules: [{
        test: /\.j[s|x]$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                path: path.resolve(__dirname, './postcss.config.js')
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                path: path.resolve(__dirname, './postcss.config.js')
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 10,
        terserOptions: {
          ie8: true,
          warnings: true,
          output: {
            comments: false,
            beautify: false
          },
          compress: {
            drop_console: true,
            passes: 2
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    minimize: true,
    mangleWasmImports: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css',
      chunkFilename: 'css/[name].[chunkhash:8].css'
    }),
  ]
})