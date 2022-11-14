<template>
    <div class="school">
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
        mounted() {
            this.$bus.$on('hello', (data) => {
                console.log('我是School组件，收到数据：' + data);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        }
    }
</script>

<style scoped>
    .school {
        background-color: aqua;
        padding: 5px;
    }
</style>