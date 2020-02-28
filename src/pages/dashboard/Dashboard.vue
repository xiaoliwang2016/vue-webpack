<template>
    <div class="container">
        <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="0">列表</el-menu-item>
            <el-menu-item index="1">轮播</el-menu-item>
        </el-menu>
        
        <keep-alive><!--在keey-alive中包裹的组件会缓存-->
            <list :data="list" ref="list" v-if="activeIndex == 0"></list>
            <carousel :data="carouselData" v-if="activeIndex == 1"></carousel>
        </keep-alive>
        
        <!-- <el-button @click="disableDel" size="mini">禁用删除</el-button> -->
        <!-- <inputs v-verify="currentRole"></inputs> -->
        <!-- <el-button @click="switchRole" size="mini">切换角色</el-button> -->
    </div>
</template>

<script>
    import axios from 'axios'
    import List from './List'
    import Inputs from './Inputs'
    import Carousel from './Carousel'
    export default {
        data() {
            return {
                list: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }
                ],
                carouselData: [
                    {
                        "type": "婚拍相册",
                        "desc": "查看订单精修片",
                        "url": "https://hucai-simoo.oss-cn-hangzhou.aliyuncs.com/p1.hucai.com/20190326/C0002928120190326/origin/798ace021e604a08816a5ec7bfb39905.png"
                    },
                    {
                        "type": "怀孕相册",
                        "desc": "存储孕期美图",
                        "url": "https://hucai-simoo.oss-cn-hangzhou.aliyuncs.com/p1.hucai.com/20190326/C0002928120190326/origin/54afb7f4f9ad4a29902ad31e0e4b568b.png"
                    },
                    {
                        "type": "旅行相册",
                        "desc": "记录旅行美好时光",
                        "url": "http://hucai-simoo.oss-cn-hangzhou.aliyuncs.com/p1.hucai.com/20190326/C0002928120190326/origin/664635040fbe4c828bfb2c7f72f2d201.png"
                    },
                    {
                        "type": "宝宝相册",
                        "desc": "记录宝宝成长的瞬间",
                        "url": "https://hucai-simoo.oss-cn-hangzhou.aliyuncs.com/p1.hucai.com/20190326/C0002928120190326/origin/3f9f478009bf47438fd5c0662db7bc7e.png"
                    }
                ],
                currentRole: 'admin',
                activeIndex: '0'
            }
        },

        mounted() {
            // this.$event.$on('addUser', this.addUser)
        },

        components: {
            List,
            Inputs,
            Carousel
        },

        methods: {
            // deleteHandler(e){
            //     this.list.splice(e, 1)
            // },

            // disableDel(){
            //     this.$refs.list.disableBtn()
            // },

            // addUser(user){
            //     this.list.push(user)
            // },

            // switchRole(){
            //     this.currentRole = 'regular'
            // }

            handleSelect(e){
                this.activeIndex = e
            }
        }
    }
</script>
<style lang="less">
    .container {
        padding: 10px 20px;
    }
</style>