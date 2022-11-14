<template>
    <ul>
        <li>消息编号：{{id}}</li>
        <li>消息标题：{{name}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail',
        props: ['id', 'name'],
        // computed: {
        //     id() {
        //         return this.$route.query.id
        //     },
        //     name() {
        //         return this.$route.query.name
        //     }
        // },
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style>

</style>