<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School-name',
        data() {
            return {
                name: '文达',
                address: '合肥紫蓬山'
            }
        },
    }
</script>

<style>

</style>