<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 class="come" v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'WdTest',
        data() {
            return {
                isShow: true,
            }
        }
    }
</script>

<style>
    h1{
        background-color: orange;
    }
    .hello-enter-active{
        animation: wenda 0.5s linear ;
    }
    .hello-leave-active {
        animation: wenda 0.5s linear reverse;
    }

    @keyframes wenda {
        from{
            transform:translateX(-100%)
        }
        to{
            transform: translateX(0px)
        }
    }
</style>