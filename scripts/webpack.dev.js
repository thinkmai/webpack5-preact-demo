const WebpackBase = require('./webpack.base.js');
const {
    merge
} = require('webpack-merge');
const path = require('path');
module.exports = merge(WebpackBase, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, '../dist'),
        port: 4000,
        hot: true,
        open: true,
        compress: true
    },
    module: {
        rules: [{
                test: /\.j[s|x]$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
})