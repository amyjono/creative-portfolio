import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Contact from '../components/Contact'
import Design from '../components/Design'
import Home from '../components/Home'
import Retouch from '../components/Retouch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/design',
      name: 'Design',
      component: Design
    },
    {
      path: '/retouch',
      name: 'Retouch',
      component: Retouch
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})