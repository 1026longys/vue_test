<template>
    <div>
        <h1>人员列表</h1>
        <h4 style="color: red">Count组件求和为：{{sum}}</h4>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPer()">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    import { mapState } from 'vuex'
    export default {
        name: 'WdPerson',
        data() {
            return {
                name: ''
            }
        },
        computed: {
            personList() {
                return this.$store.state.personList
            },
            ...mapState(['sum']),
        },
        methods: {
            addPer() {
                if(this.name) {
                    const p = { id: nanoid(), name: this.name }
                    this.$store.commit('ADD_PER', p)
                    this.name = ''
                }else {
                    alert('输入不能为空！！！')
                }
            }
        }
    }
</script>
