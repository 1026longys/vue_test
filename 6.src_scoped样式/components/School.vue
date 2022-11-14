<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School-xinxi',
        data() {
            return {
                name: '文达wenda',
                address: '合肥紫蓬山'
            }
        },
    }
</script>

<style scoped>
    .demo {
        background-color: aqua;
    }
</style>