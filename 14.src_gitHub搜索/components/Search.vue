<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp;
            <button @click="SearchUser">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'WdSearch',
        data() {
            return {
                keyword:''
            }
        },
        methods: {
            SearchUser() {
                // 搜索按钮按下时
                this.$bus.$emit('updateList', {isFirst: false, isLoading: true, errMsg: '', users: []})
                // 发送请求
                axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                    response => {
                        console.log('请求成功了')
                        this.$bus.$emit('updateList', {isLoading: false, errMsg: '', users: response.data.items})
                    }, error => {
                        console.log('请求失败了')
                        this.$bus.$emit('updateList', {isLoading: false, errMsg: error.message, users: []})
                    }
                )
            }
        },
    }
</script>

<style>

</style>