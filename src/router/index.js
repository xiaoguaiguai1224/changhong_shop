import Vue from 'vue'
import Router from 'vue-router'

import home from '../Page/home/homePage.vue'
import search from '../Page/search/searchPage.vue'
import order from '../Page/order/orderPage.vue'
import person from '../Page/person/personPage.vue'
import login from '../Page/login/loginPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
      meta: { // 可以显示 Footer底部组件
        showFooter: true
      }
    },
    {
      path: '/search',
      component: search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/person',
      component: person,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/home' // 重定向
    },
    {
      path: '/login',
      component: login
      // meta.showFooter对象如果不显示则可不需要配置
    }
  ]
})
