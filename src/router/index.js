import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'

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
        hidden: false,
        meta: {
            name: '员工管理',
            icon: 'peoples',
            role: ['manager', 'admin']
        },
        children: [
            {
                path: '/list',
                component: () => import('@/pages/employee/List'),
                hidden: false,
                meta: {
                    name: '员工列表',
                    icon: 'peoples',
                    role: ['manager', 'admin']
                }
            },
            {
                path: '/detail',
                component: () => import('@/pages/employee/Detail'),
                hidden: false,
                meta: {
                    name: '员工明细',
                    icon: 'people',
                    role: ['manager', 'admin']
                }
            }
        ]
    },

    {
        name: 'setting',
        path: '/setting',
        component: () => import('@/pages/setting/Setting'),
        hidden: false,
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