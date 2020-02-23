<template>
    <div class="tab">
        <div class="tab-item" @click.stop="changeTabItem(0, 'home')">
            <template>
                <svg-icon class-name="tab-icon" icon-class="home_1" v-if="curIndex == 0"></svg-icon>
                <svg-icon class-name="tab-icon" icon-class="home" v-else></svg-icon>
            </template>
            <span :class="[ curIndex == 0 ? 'active' : '' ]">首页</span>
        </div>
        <div class="tab-item" @click.stop="changeTabItem(1, 'theme')">
            <template>
                <svg-icon class-name="tab-icon" icon-class="theme_1" v-if="curIndex == 1"></svg-icon>
                <svg-icon class-name="tab-icon" icon-class="theme" v-else></svg-icon>
            </template>
            <span :class="[ curIndex == 1 ? 'active' : '' ]">主题</span>
        </div>
        <div class="tab-item" @click.stop="changeTabItem(2, 'mine')">
            <template>
                <svg-icon class-name="tab-icon" icon-class="people_1" v-if="curIndex == 2"></svg-icon>
                <svg-icon class-name="tab-icon" icon-class="people" v-else></svg-icon>
            </template>
            <span :class="[ curIndex == 2 ? 'active' : '' ]">我的</span>
        </div>
    </div>
</template>

<script>
export default {
    
    name: 'Tab',

    data(){
        return {
            curIndex: 0
        }
    },

    methods: {
        changeTabItem(index, routeName){
            this.curIndex = index
            this.$router.push({ name: routeName })
        }
    }
}
</script>

<style lang="less" scoped>
.tab{
    width: 100vw;
    height: 50px;
    display: flex;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 -2px 5px #f0f0f0;
    .tab-item{
        width: 33%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        span{
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }
        .active{
            color: rgb(216, 30, 6);
        }
    }

}
</style>


<style lang="less">
.tab-icon{
    width: 20px !important;
    height: 20px !important;
}
</style>