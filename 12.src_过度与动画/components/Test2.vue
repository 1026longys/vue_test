<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- 单个元素 -->
        <!-- <transition name="hello" appear>
            <h1 class="come" v-show="isShow">你好啊！</h1>
        </transition> -->
        <!-- 多个元素 -->
        <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">文达！</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'WdTest2',
    data() {
        return {
            isShow: true,
        }
    }
}
</script>

<style>
    h1 {
        background-color: orange;
    }
    
</style>