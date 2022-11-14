<template>
    <div>
        <!-- v-bind:age="..." ==> ""中表达式的结果 -->
        <Student name="李四" sex="男" :age="18"/>   
    </div>
</template>

<script>
    import Student from './components/Student'
    export default {
        name: 'App',
        components: {Student},
    }
</script>
