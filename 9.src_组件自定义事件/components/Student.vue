<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="getName">点我提示学生名</button>
        <button @click="unbind">点我解绑</button>
        <button @click="death">销毁当前Student组件的实例(vc)</button>
    </div>
</template>

<script>
    export default {
        name: 'Student-xinxi',
        data() {
            return {
                name: '张三',
                age: 18,
                x: 666
            }
        },
        methods: {
            getName() {
                // 触发Student组件实例身上的atguigu事件
                this.$emit('wenda', this.name, 666, 888, 900)
                // this.$emit('demo')
            },
            unbind() {
                this.$off('wenda')        // 解绑一个自定义事件
                // this.$off(['wenda', 'demo'])    // 解绑多个自定义事件
                // this.$off()            // 解绑所有自定义事件
            },
            death() {
                // 销毁当前Student组件的实例
                this.$destroy()
                // 销毁后所有Student实例的自定义事件全都不奏效
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