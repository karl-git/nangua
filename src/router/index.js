import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 主页
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
