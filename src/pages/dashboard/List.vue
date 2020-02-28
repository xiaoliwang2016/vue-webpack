<template>
    <div>
        <el-table :data="data" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <!-- <el-button :disabled="avaibleBtn" @click="handleClick(scope.$index)" type="text" size="small">删除</el-button> -->
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default {
        name: 'List',
        data(){
            return {
                avaibleBtn: false
            }
        },
        props: {
            data: {
                default: [],
                type: Array
            }
        },

        methods: {
            // handleClick(e){
            //     this.$parent.deleteHandler(e)
            // },

            // disableBtn(){
            //     this.avaibleBtn = !this.avaibleBtn
            // }
        },

        mounted(){
            console.log('Mounted in List');
        }
    }
</script>