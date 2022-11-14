<template>
    <div class="footer part" v-show="total">
        <div class="select">
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
            <input type="checkbox" v-model="isAll"/>
            已完成{{doneTotal}} / 全部 {{total}}
        </div>
        <button class="btn" @click="clearSelected()">清除已选</button>
    </div>
</template>

<script>
    export default {
        name: "WdFooter",
        props: ['todos'],
        computed: {
            total() {
                return this.todos.length
            },
            doneTotal() {
                return this.todos.reduce((pre, todo) =>  pre + (todo.done ? 1 : 0), 0)
            },
            isAll: {
                get() {
                    return this.todos.length === this.doneTotal
                },
                set(value) {
                    this.$emit('checkAllTodo', value)
                }   
            },
        },
        methods: {
            // 用计算属性 + 方法
            // checkAll(e) {
            //     this.checkAllTodo(e.target.checked)
            // },
            clearSelected() {
                this.$emit('clearSelectedTodo')
            }
        }
    }
</script>

<style lang="less" scoped>
    .footer, .part {
        font-size: 14px;
        padding: 10px 5px 0px;
        border-bottom: none;
        .select {
            display: inline-block;
            input {
                vertical-align: middle;
            }
        }
        button {
            display: block;
            padding: 3px 5px;
        }
    }
</style>

