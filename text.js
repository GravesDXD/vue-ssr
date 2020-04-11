const Vue  = require('vue');
const server = require('express')();
const renderder = require('vue-server-renderer').createRenderer();
const fs = require('fs');

function createApp(url){
    if(url ==='/'){
        url = '/index'
    }
    try{
        const json = fs.readFileSync(`json${url}.json`,'utf-8');
        const template = fs.readFileSync(`template${url}.html`,'utf-8');
        return new Vue({
            data:JSON.parse(json),
            template:template
        })
    }catch(e){
        console.log(e)
    }
}


server.get('*',(req,res)=>{
    const app = createApp(req.url);
    renderder.renderToString(app,(err,html)=>{
        if(err){
            res.status(500).end('server error');
            return;
        }
        res.end(html)
    })
})

server.listen(7070)