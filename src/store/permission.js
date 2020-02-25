import http from '@/utils/http'
import { asyncRoutes } from '@/router'
import router from '@/router'

const filteAsyncRoutes = function(role, routes){
    var routeArr = []
    routes.map(item => {
        if(item.meta && Array.isArray(item.meta.role) && !item.meta.role.includes(role)) return
        if(Array.isArray(item.children)){
            item.children = filteAsyncRoutes(role, item.children)
        }
        routeArr.push(item)
    })
    return routeArr
}

const mergeRoutes = function(routes){
    var staticRoutes = router.options.routes, allRoutes
    allRoutes = staticRoutes.concat(routes)
    return allRoutes
}

const state = {
    role: '',
    routes: []
}

const mutations = {
    updateRole(state, role){
        state.role = role
    },

    updateRoutes(state, routes){
        state.routes = routes
    }
}

const actions = {
    login({ commit }, userInfo){
        return new Promise((resolve, reject) => {
            http.post('/login', userInfo).then(res => {
                if(res.code == 200){
                    commit('updateRole', res.role)
                    var asyncR = filteAsyncRoutes(res.role, asyncRoutes) /** */
                    router.addRoutes(asyncR)   /** 通过 addRoutes 挂载的路由无法通过 this.$router.options.routes 获取，该变量只能获取静态路由 */
                    var routes = mergeRoutes(asyncR)
                    commit('updateRoutes', routes)
                    resolve()
                }else{
                    reject(res.message)
                }
            })
        })
    }
}

const permission = {
    namespaced: true, /** 默认是注册在全局空间下 */
    state,   
    mutations,
    actions         /** 通过 dispatch(模块/方法) */
}

export default permission