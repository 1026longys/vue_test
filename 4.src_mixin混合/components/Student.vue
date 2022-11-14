<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    // import {hunhe, hunhe2} from '../mixin'
    export default {
        name: 'Student-xinxi',
        data() {
            return {
                name: '张三',
                age: 18,
                x: 666
            }
        },
        // mixins: [hunhe, hunhe2],
        mounted() {
            console.log('你好啊！！！')
        }
    }
</script>

<style>

</style>