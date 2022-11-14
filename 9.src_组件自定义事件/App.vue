<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>
        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据（第一种写法，使用@或v-on) -->
        <Student @wenda="getStudentName" @demo="getName" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据（第二种写法，使用ref, 灵活) -->
        <!-- <Student ref="student" /> -->
    </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'

    export default {
        name: 'App',
        data(){
            return{
                msg: '你好啊！',
            }
        },
        components: {Student, School},
        methods: {
            getSchoolName(name) {
                console.log('App收到了学校名:' + name)
            },
            getStudentName(name, ...params) {
                console.log('App收到了学生名:' + name, params)
            },
            getName() {
                console.log(111)
            }
        },
        // 生命周期钩子（挂起）
        // mounted() {
        //     // setTimeout(() => {
        //         this.$refs.student.$on('wenda', this.getStudentName)
        //         // this.$refs.student.$once('wenda', this.getStudentName)  // 只执行一次
        //     // }, 3000)
        // }
        
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>