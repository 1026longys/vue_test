<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px' />
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <!--展示欢迎词-->
        <h1 v-show="info.isFirst">欢迎使用！</h1>
        <!--展示加载中-->
        <h1 v-show="info.isLoading">加载中...</h1>
        <!--展示错误信息 -->
        <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
        
    </div>
</template>

<script>
    export default {
        name: 'WdList',
        data() {
            return {
                info: {
                    isFirst: true,         // 欢迎词展示
                    isLoading: false,      // 加载
                    errMsg: '',            // 错误信息
                    users: [],             // 用户信息
                }
            }
        },
        mounted() {
            this.$bus.$on('updateList', (dataObj) => {
                this.info = {...this.info, ...dataObj}
            })
        }
    }
</script>

<style scoped>
    .album {
        min-height: 50rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card>img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        margin-top: 10px;
    }
</style>