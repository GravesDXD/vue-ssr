import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routeList = []
function importAll(r){
  r.keys().forEach(key=>routeList.push(r(key).default))
}
importAll(require.context('../routeList',true,/\.route\.js/))
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...routeList
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// export default router
export function createRouter(){
    return router
}
