const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : resolve(__dirname,'src/app.js'),
    resolveLoader : {
        modules : ['node_modules',resolve(__dirname,'loaders')]
    },
    output : {
        path : resolve(__dirname,'dist'),
        filename : 'app.[hash].js'
    },
    module :{
        rules : [
            {
                test : /\.tpl$/,
                use : [
                    'babel-loader',
                    {
                        loader : 'tpl-loader',
                        options : {
                            log : true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template : resolve(__dirname,'index.html')
        })
    ],
    devtool : 'source-map',
    devServer : {
        port : '3333'
    }
}