const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackconfig = require('./webpack.config');
const VueSSRServerRenderer = require('vue-server-renderer/server-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(webpackconfig,{
    mode:'production',
    entry:{
        app:path.resolve(__dirname,'../src/server.js')
    },
    target:'node',
    output:{
        libraryTarget:'commonjs2',
    },
    plugins:[
        new VueSSRServerRenderer(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.ssr.html'),
            filename: 'index.ssr.html',
            files:{
                js:'app.js'
            },
            inject:false,
            minify:{
                removeComments:false
            }
        })
    ]
})
