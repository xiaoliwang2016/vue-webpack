<template>
    <div class="page">
        <el-row class="col">
            <el-col :span="6">
                <Menu></Menu>
            </el-col>
            <el-col :span="18">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Menu from './Menu'
export default {
    name: 'Layout',

    data(){
        return {

        }
    },

    mounted(){
        
    },

    components: {
        Menu
    }
}
</script>
<style lang="less">
.page{
    width: 100vw;
}
</style>