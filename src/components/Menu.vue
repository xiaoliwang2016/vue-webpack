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
                    <span>{{item.meta.name}}</span>
                </template>
                <template v-if="item.children">
                    <el-menu-item-group>
                        <el-menu-item v-for="(subItem, idx) in item.children" :index="index + '-' + idx" :key="idx">{{subItem.meta.name}}</el-menu-item>
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
            function filterRoute(routes){
                routes = routes.filter(item => {
                    if(Array.isArray(item.children) && item.hidden === false){
                        item.children = filterRoute(item.children)
                    }
                    return item.hidden === false
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