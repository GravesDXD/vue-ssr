import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import {createRouter} from './router/index.js'
Vue.config.productionTip = false

let router = createRouter()
export function createApp(){
    const app = new Vue({
        router,
        render:h=>h(app)
    })
    return {app,router} 
}