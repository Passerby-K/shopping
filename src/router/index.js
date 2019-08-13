import Vue from 'vue'
import Router from 'vue-router'
import Miste from '@/pages/Miste/Miste'
import Order from '@/pages/Order/Order'
import Search from '@/pages/Search/Search'
import Profile from '@/pages/Profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/miste',
      name: 'Miste',
      component: Miste
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/',
      redirect:"/Miste"
    },
  ]
})
