<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://p1.meituan.net/bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@321w_180h_1e_1c" alt="">
            <a slot="footer" href="">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="">单机游戏</a>
                <a href="">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template #footer>
                <div class="foot">
                    <a href="">经典</a>
                    <a href="">热门</a>
                    <a href="">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: {Category},
        data() {
            return {
                foods: ['火锅','烧烤','小龙虾','牛排'],
                games: ['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films: ['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
            }
        },
    }
</script>

<style>
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>