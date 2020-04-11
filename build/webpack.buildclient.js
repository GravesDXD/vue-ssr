const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackconfig = require('./webpack.config');
const VueSSRClientRenderer = require('vue-server-renderer/client-plugin');
module.exports = webpackMerge(webpackconfig,{
    mode:'production',
    entry:{
        app:path.resolve(__dirname,'../src/client.js')
    },
    plugins:[
        new VueSSRClientRenderer(),
    ]
})
