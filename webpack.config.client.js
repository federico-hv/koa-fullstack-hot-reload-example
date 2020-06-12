const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");

module.exports = {

    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        './client/index'
    ],
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use : [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // you can specify a publicPath here
                          // by default it uses publicPath in webpackOptions.output
                          publicPath: 'http://localhost:3001/',
                          hmr: true // Evaluate here if it's dev environment or not
                        },
                    },
                    // 'style-loader', 
                    'css-loader' 
                ]
            },
            {
                test: /\.js?$/,
                use: 'babel-loader',
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'common')
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename : 'shit.css',
            // disable  : false,
            // allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify("client")
            }
        })
    ],
    devServer: {
        host: 'localhost',
        port: 3001,
        historyApiFallback: true,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    output: {
    path: path.join(__dirname, '.build'),
    publicPath: 'http://localhost:3001/',
    filename: 'client.js'
    }
}