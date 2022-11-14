<template>
    <div class="list">
        <transition-group 
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInLeft"
            leave-active-class="animate__fadeOutRight"
        >
            <WdItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
        </transition-group>
    </div>
</template>

<script>
    import 'animate.css'
    import WdItem from './WdItem.vue'
    export default {
        name: "WdList",
        props: ['todos'],
        components: {WdItem}
    }
</script>

<style lang="less">
    .list {
        border: 1px solid #ccc;
        border-radius: 5px;
        margin: 10px 0px;
    }
</style>