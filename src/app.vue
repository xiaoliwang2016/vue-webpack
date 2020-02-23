<template>
    <div>
        <router-view></router-view>
        <tab></tab>
    </div>
</template>

<script>
import Tab from './components/Tab'
export default {
    components: {
        Tab
    }
}
</script>