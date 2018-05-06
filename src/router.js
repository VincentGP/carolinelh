import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import ComingSoon from './views/ComingSoon'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/coming-soon',
      name: 'coming soon',
      component: ComingSoon
    }
  ]
})
