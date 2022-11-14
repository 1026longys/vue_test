<template>
    <div>
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我测试hello</button>
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
        methods: {
            test() {
                this.hello()
            }
        }
    }
</script>

<style>

</style>