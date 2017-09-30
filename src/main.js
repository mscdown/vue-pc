// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/layout'
import IndexPage from './pages/index'
import Detail from './pages/detail'
import VueResource from 'vue-resource';
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
Vue.use(VueRouter)
Vue.use(VueResource)


// Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: Detail,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Layout)
})
