<template>
    <div class="container">
        <Category title="美食">
            <img src="https://p1.meituan.net/bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@321w_180h_1e_1c" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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