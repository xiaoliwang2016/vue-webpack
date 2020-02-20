<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) in list" :key="item.title" @click="jump(item.link)">
                {{item.title}} 
                <el-button type="danger" icon="el-icon-delete" circle  @click.stop=deleteItem(index)></el-button>
            </li>
        </ul>
        <div class="inputs">
            <el-input v-model="title" placeholder="请输入Title" class="input"></el-input>
            <el-input v-model="link" placeholder="请输入Link" class="input"></el-input>
            <el-button type="primary" @click.stop="addItem">添加</el-button>
        </div>
        <el-button el-button type="warning" round size="mini" @click.stop="reset" class="reset-btn">初始化</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list : [
                { title: 'google', link: 'https://www.google.com' },
                { title: 'sina', link: 'https://www.sina.com' }
            ],
            title: '',
            link: ''
        }
    },

    methods: {
        jump(url){
            window.location.href = url
        },

        addItem(){
            this.list.push({ title: this.title, link: this.link })
            this.title = ''
            this.link = ''
        },

        deleteItem(index){
            this.list.splice(index, 1)
        },

        reset(){
            this.list = this.$options.data().list
        }
    }
}
</script>

<style lang="less" scoped>
.container{
    padding: 20px;
}
.inputs{
    display: flex;
    .input{
        width: 30%;
        margin-right: 20px;
    }
}
.reset-btn{
    margin-top: 20px;
}
</style>