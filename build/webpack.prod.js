const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackconfig = require('./webpack.config');

module.exports = webpackMerge(webpackconfig,{
    mode:'production',
})
