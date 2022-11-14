<template>
    <div class="item">
        <li class="part">
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span> 
            <input 
                type="text" 
                id="edit"
                v-show="todo.isEdit" 
                :value="todo.title" 
                @blur="handleBlur(todo, $event)"
                ref="inputFocus"
            />
            <button class="btn edit" @click="edit(todo)" v-show="!todo.isEdit">修 改</button>
            <button class="btn" @click="del(todo.id)" v-show="!todo.isEdit">删 除</button>
        </li>
    </div>
</template>

<script>
    export default {
        name: "WdItem",
        props: ['todo'],
        methods: {
            handleCheck(id) {
                // 通知IApp组件将对应的todo对象的done值取反
                this.$bus.$emit('checkTodo', id)
            },
            del(id) {
                if(confirm('确定删除'+ this.todo.title +'吗?')) {
                    this.$bus.$emit('delTodo', id) 
                }
            },
            edit(todo) {
                if(todo.hasOwnProperty('isEdit')) {
                    console.log(1);
                    todo.isEdit = true;
                }else {
                    console.log(2);
                    this.$set(todo, 'isEdit', true)
                }
                this.$nextTick(()=> {
                    this.$refs.inputFocus.focus()
                })
            },
            // 失去焦点时更新
            handleBlur(todo, e) {
                todo.isEdit = false
                if (!e.target.value.trim()) return alert('输入不能为空！') 
                this.$bus.$emit('updateTodo', todo.id, e.target.value)
            }
        }
    }
</script>

<style lang="less">
    @a: 5px;
    .part {
        display: flex;
        align-items: center;
        padding: @a;
        border-bottom: 1px solid #bbb;
        position: relative;
        input {
            margin-right: @a;
        }
        // #edit{
        //     border: none;
        //     outline: none;
        //     font-size: 16px;
        // }
        .btn {
            color: rgba(255, 255, 255, 0.8);
            background-color: red;
            border: 1px solid rgb(209, 6, 6);
            padding: 3px @a;
            border-radius: 3px;
            cursor: pointer;
            position: absolute;
            right: @a;
            display: none;
        }
        .edit{
            right: 50px;
            background-color: skyblue;
            border: 1px solid rgb(104, 162, 185);
        }
        &:hover {
            background-color: #ddd;
            .btn {
                display: block;
            } 
        }    
    }
</style>

