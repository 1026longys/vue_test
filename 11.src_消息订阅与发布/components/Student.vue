<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="getName">点我显示姓名</button>
    </div>
</template>

<script>
    import pubsub from "pubsub-js"
    export default {
        name: 'Student-xinxi',
        data() {
            return {
                name: '张三',
                age: 18,
            }
        },
        methods: {
            getName() {
                // 全局事件总线
                // this.$bus.$emit('hello', this.name)

                // 消息发布
                pubsub.publish('hello', 666)
            }
        }
    }
</script>

<style lang="less" scoped>
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>