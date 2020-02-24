import http from '@/utils/http'
import { asyncRoutes } from '@/router'
import router from '@/router'

const filteAsyncRoute = function(role){
    var routes = asyncRoutes.map(route => route.meta.role.includes(role))
    console.log();
    
    router.addRoutes(routes)
}

const state = {
    role: ''
}

const mutations = {
    updateRole(state, role){
        state.role = role
    }
}

const actions = {
    login({ commit }, userInfo){
        return new Promise((resolve, reject) => {
            http.post('/login', userInfo).then(res => {
                if(res.code == 200){
                    filteAsyncRoute(res.role)
                    commit('updateRole', res.role)
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