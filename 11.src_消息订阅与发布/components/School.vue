<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School-xinxi',
        data() {
            return {
                name: '文达wenda',
                address: '合肥紫蓬山'
            }
        },
        methods: {
            getStuName(msgName, data) {
                console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data)
            }
        },
        mounted() {
            // 全局事件总线
            // this.$bus.$on('hello', (data) => {
            //     console.log('我是School组件，收到数据：' + data);
            // })

            // 消息订阅
            this.pubId = pubsub.subscribe('hello', this.getStuName)
            
        },
        beforeDestroy() {
            // this.$bus.$off('hello')
            // 取消订阅
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
    .school {
        background-color: aqua;
        padding: 5px;
    }
</style>