<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games=" games" msg="hello">我是一些默认内容</slot>
    </div>
</template>

<script>
    export default {
        name: 'WdCategory',
        data() {
            return {
                games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            }
        },
        props: ['title']
    }
</script>

<style>
    .category {
        width: 200px;
        height: 300px;
        background-color: skyblue;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>