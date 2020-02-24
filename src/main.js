import Vue from 'vue'
import App from './app.vue'

import '@/mock'

import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)

import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import http from '@/utils/http'
Vue.prototype.$http = http

import '@/assets/css/common.less'
import './icons'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
  