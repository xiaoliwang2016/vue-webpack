<template>
    <div>
        <el-menu
            background-color="#545c64"
            active-text-color="#ffd04b"
            text-color="#fff"
            class="menu"
        >
            <el-submenu :index="index + ''" v-for="(item, index) in routes" :key="index">
                <template slot="title">
                    <svg-icon :icon-class="item.meta.icon"></svg-icon>
                    <router-link :to="item.path">{{item.meta.name}}</router-link>
                </template>
                <template v-if="item.children">
                    <el-menu-item-group>
                        <el-menu-item v-for="(subItem, idx) in item.children" :index="index + '-' + idx" :key="idx">
                            <router-link :to="item.path + '/' + subItem.path">{{subItem.meta.name}}</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Menu',

        data(){
            return {
                routes: []
            }
        },

        mounted(){
            /**
             * 1. 仅保留 component 为 Layout 的路由
             * 2. 对 hidden 属性为 true 的路由进行过滤
             */
            function filterRoute(routes, isChildren = false){
                routes = routes.filter(item => {
                    if((item.component && item.component.name == 'Layout') || isChildren){
                        if(item.hidden) return false
                        if(Array.isArray(item.children)){
                            item.children = filterRoute(item.children, true)
                        }
                        return true
                    }
                    return false
                })
                return routes
            }
            this.routes = filterRoute(this.$store.state.permission.routes)
        }
    }
</script>
<style scoped>
.menu{
    min-height: 100vh;
}
</style>