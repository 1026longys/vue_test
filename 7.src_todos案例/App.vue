<template>
    <div class="main">
        <WdHeader @addTodo="addTodo"/>
        <WdList :todos="todos"/>
        <WdFooter 
            :todos="todos" 
            @checkAllTodo="checkAllTodo" 
            @clearSelectedTodo="clearSelectedTodo"
        />
    </div>
</template>

<script>
    import WdHeader from './components/WdHeader'
    import WdList from './components/WdList'
    import WdFooter from './components/WdFooter'

    export default {
        name: 'App',
        data() {
            return {
                todos: JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            // 添加一个todo
            addTodo(todoObj) {
                this.todos.unshift(todoObj)
            },
            // 勾选或取消勾选一个todo
            checkTodo(id) {
                this.todos.forEach((todo)=> {
                    if(todo.id === id) todo.done = !todo.done
                })
            },
            // 删除
            delTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            updateTodo(id, title) {
                this.todos.forEach((todo) => {
                    if (todo.id === id) todo.title = title
                })
            },
            // 全选或全不选
            checkAllTodo(done) {
                this.todos.forEach(todo => todo.done = done)
            },
            // 清除已选
            clearSelectedTodo() {
                this.todos = this.todos.filter(todo => !todo.done)
            }
        },
        watch: {
            todos: {
                deep: true,
                handler(value) {
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }
        },
        components: { WdHeader, WdList, WdFooter },
        mounted() {
            this.$bus.$on('checkTodo', this.checkTodo)
            this.$bus.$on('delTodo', this.delTodo)
            this.$bus.$on('updateTodo', this.updateTodo)
        },
        beforeDestroy() {
            this.$bus.$off()('checkTodo')
            this.$bus.$off()('delTodo')
            this.$bus.$off()('updateTodo')
        }
    }
</script>

<style lang="less">
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ol, ul {
        list-style: none;
    }
    .main {
        width: 500px;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid #bbb;
        border-radius: 5px;
        margin-top: 10px;
    }
</style>