import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login';
import Home from '../components/home/home';
import User from '../components/home/submenu/user';
import Employ from '../components/home/submenu/employ';
import Menubar from '../components/home/submenu/menubar/menubar';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'employees_account',
          name:'employees_account',
          component:Employ
        },
        {
          path: 'user_control',
          name: 'user_control',
          component: User
        },
        {
          path: 'menubar',
          name: 'menubar',
          component: Menubar
        }
      ]
    }
  ]
})
