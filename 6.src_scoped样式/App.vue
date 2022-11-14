<template>
    <div>
        <h1 class="hi">你好啊</h1>
        <School/>
        <hr>
        <Student/>
    </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'

    export default {
        name: 'App',
        components: {Student, School},
        
    }
</script>

<style scoped>
    .hi {
        color: red;
    }
</style>