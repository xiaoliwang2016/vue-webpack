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
import axios from 'axios'
import Menu from '@/components/Menu'
export default {
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