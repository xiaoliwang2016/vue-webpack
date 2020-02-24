import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'

const routes = [

    { 
        path: '/',
        redirect: '/home'
    },

    {
        name: 'login',
        path: '/login',
        component: Login
    },

    {
        name: 'home',
        path: '/home',
        component: Home
    },

    {
        path: '*',
        redirect: '/login'
    }

]

const asyncRoutes = [

    {
        name: 'employee',
        path: '/employee',
        component: () => import('@/pages/Employee'),
        meta: {
            name: '员工管理',
            icon: 'peoples',
            role: ['manager', 'admin']
        }
    },

    {
        name: 'setting',
        path: '/setting',
        component: () => import('@/pages/Setting'),
        meta: {
            name: '设置',
            icon: 'setting',
            role: ['admin']
        }
    }

]

export { asyncRoutes }
export default new VueRouter({
    routes
})