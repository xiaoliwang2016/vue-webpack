<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
            <el-input v-model="formInline.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="formInline.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加</el-button>
        </el-form-item>
      </el-form>
</template>
<script>
export default{
    data(){
        return {
            formInline: {
                name: '',
                address: ''
            }
        }
    },

    methods: {
        onSubmit(){
            var user = { name: this.formInline.name, address: this.formInline.address, date: new Date().toString() }
            this.$event.$emit('addUser', user)
        }
    }
}
</script>