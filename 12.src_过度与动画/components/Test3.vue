<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInDown"
            leave-active-class="animate__backOutUp"
        >
            <h1 class="come" v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    // 引入第三方库
    import 'animate.css'
    export default {
        name: 'WdTest3',
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