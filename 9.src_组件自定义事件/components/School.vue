<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="getName">点我提示学校名</button>
    </div>
</template>

<script>
    export default {
        name: 'School-xinxi',
        props: ['getSchoolName'],
        data() {
            return {
                name: '文达wenda',
                address: '合肥紫蓬山'
            }
        },
        methods: {
            getName() {
                this.getSchoolName(this.name)
            }
        }
    }
</script>

<style scoped>
    .school {
        background-color: aqua;
        padding: 5px;
    }
</style>