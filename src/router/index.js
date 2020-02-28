import VueRouter from 'vue-router'
import Layout from '@/pages/layout/Layout'
import Login from '@/pages/login/Login'

const routes = [

    {
        name: 'login',
        path: '/login',
        component: Login
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        hidden: true,
        children: [
            {
                path: 'dashboard',
                component: () => import('@/pages/dashboard/Dashboard')
            }
        ]
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
        component: Layout,
        meta: {
            name: '员工管理',
            icon: 'peoples',
            role: ['manager', 'admin']
        },
        redirect: '/employee/list',
        children: [
            {
                path: 'list',
                component: () => import('@/pages/employee/List'),
                hidden: false,
                meta: {
                    name: '员工列表',
                    icon: 'people',
                    role: ['manager', 'admin']
                }
            },
            {
                path: 'detail',
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
        component: Layout,
        meta: {
            name: '常规设置',
            icon: 'setting',
            role: ['admin']
        },
        redirect: '/setting/regular',
        children: [
            {
                path: 'regular',
                component: () => import('@/pages/setting/Regular'),
                hidden: false,
                meta: {
                    name: '常规设置',
                    icon: 'setting',
                    role: ['admin']
                }
            },
            {
                path: 'system',
                component: () => import('@/pages/setting/System'),
                hidden: false,
                meta: {
                    name: '系统',
                    icon: 'setting',
                    role: ['admin']
                }
            }
        ]
    }

]

export { asyncRoutes }
export default new VueRouter({
    routes
})