<template>
    <div class="demo">
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
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
        }
    }
</script>

<style lang="less" scoped>
    .demo{
        background-color: pink;
        .qwe{
            font-size: 40px;
        }
    }
</style>