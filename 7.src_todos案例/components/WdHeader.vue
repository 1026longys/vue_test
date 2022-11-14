<template>
    <div class="header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
    // 引入nanoid (分别暴露)
    import {nanoid} from 'nanoid'
    export default {
        name: "WdHeader",
        // props: ['addTodo'],
        data() {
            return {
                title: ''
            }
        },
        methods: {
            add() {
                // 校验数据
                if(!this.title.trim()) return alert('数据不能为空！')
                // 将用户的输入包装成一个todo对象
                const todoObj = {id: nanoid(), title: this.title, done: false}
                // 通知App组件去添加一个todo对象
                // this.addTodo(todoObj)
                this.$emit('addTodo',todoObj)
                // 清空输入
                this.title= ''
            }
        }
    }
</script>

<style lang="less">
    .header{
        text-align: center;
        input {
            width: 98%;
            height: 30px;
            padding-left: 5px;
            border: 1px solid #bbb;
            border-radius: 3px;
            outline: 1px solid rgb(4, 235, 248);
        } 

    }
</style>
