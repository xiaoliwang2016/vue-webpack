<template>
    <div>
        <h1>home</h1>
    </div>
</template>

<script>
import Tab from '@/components/Tab'
import axios from 'axios'
export default {
    data(){
        return {

        }
    },

    mounted(){
        this.request('/api/home/swipes')
    },

    components: {
        Tab
    }
}
</script>