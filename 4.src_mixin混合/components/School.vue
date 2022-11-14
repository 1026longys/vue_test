<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    // import {hunhe, hunhe2} from '../mixin'
    export default {
        name: 'School-xinxi',
        data() {
            return {
                name: '文达',
                address: '合肥紫蓬山'
            }
        },
        // mixins: [hunhe, hunhe2]
    }
</script>

<style>

</style>