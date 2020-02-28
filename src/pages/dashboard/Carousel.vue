<template>
    <div class="block">
        <el-carousel height="134px">
            <el-carousel-item v-for="item in data" :key="item.type">
                <div class="img-container"><img :src="item.url" :alt="item.desc" class="img"></div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default {
        props: {
            data: {
                default: [],
                type: Array
            }
        },

        mounted(){
            console.log('Mounted in Carousel');
        }
    }
</script>
<style scoped>
.block{
    width: 300px;
    height: 134px;
    margin: 20px auto;
}
.img-container{
    width: 210px;
    height: 134px;
    margin: 0 auto;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>