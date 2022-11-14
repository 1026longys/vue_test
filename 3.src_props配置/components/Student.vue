<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{myAge+1}}</h2>
        <button @click="addAge">点击修改年龄</button>
    </div>
</template>

<script>
    export default {
        name: 'Student-xinxi',
        data() {
            return {
                msg: '我是文达的学生！',
                myAge: this.age
            }
        },
        methods: {
            addAge() {
                this.myAge++
            }
        },
        // 简单声明接收
        //props: ["name", "sex", "age"]   // 顺序不做要求

        // 接受的同时对数据：进行类型限制
        // props: {
        //     name :String,
        //     sex :String,
        //     age: Number
        // }

        // 接受的同时对数据：进行类型限制 + 必要性限制 + 默认值指定
        props: {
            name: {
                type: String,    // 类型是字符型
                required: true   // name是必须的
            },
            sex: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                default: 99      // 默认值
            }
        }
    }
</script>

<style>

</style>