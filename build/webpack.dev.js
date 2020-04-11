const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackconfig = require('./webpack.config');
module.exports = webpackMerge(webpackconfig,{
    mode:'development',
    output:{
        filename:'[name].js'
    },
    devServer:{
        port:'8081',
        open:true,
        historyApiFallback:true,
        // hot:true
    }
})