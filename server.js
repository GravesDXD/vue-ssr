const express = require('express');
const server = express();
const {createBundleRenderer} = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');

const serverBundle = require(path.resolve(__dirname,'./dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname,'./dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(path.resolve(__dirname,'./dist/index.ssr.html'),'utf-8');

const renderer = createBundleRenderer(serverBundle,{
    runInNewContext:false,
    template:template,
    clientManifest:clientManifest
})
//设置静态目录，本地读文件能读到，但是一旦在线上跑，是读不到本地文件，
//npm run dev 只能访问static文件，设置静态目录后就能访问
server.use(express.static(path.resolve(__dirname,"../dist")));

server.get("*",(req,res)=>{
    const context = {url:req.url};
    const ssrStream = renderer.renderToStream(context);
    let buffers = [];
    ssrStream.on('error',err=>{console.log(err)});
    ssrStream.on('data',data=>buffers.push(data));
    ssrStream.on('end',()=>{res.end(Buffer.concat(buffers))});
})

server.listen(5555);