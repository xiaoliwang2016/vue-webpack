import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Theme from '@/pages/Theme'

var routes = [

    { 
        path: '/',
        redirect: { name: 'home' }
    },

    {
        name: 'home',
        path: '/home',
        component: Home
    },

    {
        name: 'theme',
        path: '/theme',
        component: Theme
    }

]

export default new VueRouter({
    routes
})