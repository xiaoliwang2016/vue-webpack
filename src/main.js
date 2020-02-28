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

Vue.prototype.$event = new Vue()

Vue.directive('verify', {
    inserted: function(el, binding){
        if(binding.value !== 'admin'){
            el.parentElement.removeChild(el)    /** 在bind中el.parentElement为null，因为此时dom还没有插入 */
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
  