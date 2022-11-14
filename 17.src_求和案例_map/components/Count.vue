<template>
    <div class="category">
        <h2>当前求和为：{{sum}}</h2>
        <h4>当前求和放大十倍为：{{bigSum}}</h4>
        <h4>我在{{school}}，学习{{ subject }}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button class="btn" @click="increment(n)">+</button>
        <button class="btn" @click="decrement(n)">-</button>
        <button class="btn" @click="incrementOdd(n)">是奇数就加</button>
        <button class="btn" @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        name: 'WdCount',
        data() {
            return {
                n: 1,
            }
        },
        computed: {
            // 借助mapState生成计算属性，从state中读取数据。（对象写法)
            // ...mapState({ sum: 'sum', school: 'school', subject: 'subject'}),
            // 当键值是一样的时候，可简写为： (数组写法)
            ...mapState(['sum','school', 'subject']),

            // 借助mapGetters生成计算属性，从getter中读取数据。（对象写法)
            // ...mapGetters({bigSum: 'bigSum'}),
            // 当键值是一样的时候，可简写为： (数组写法)
            ...mapGetters(['bigSum']),

                   
            // bigSum() {
            //     return this.$store.getters.bigSum
            // }
        },
        methods: {
            // increment() {
            //     this.$store.commit('ADD', this.n)
            // },
            // decrement() {
            //     this.$store.commit('RED', this.n)
            // },
            // incrementOdd() {
            //     this.$store.dispatch('addOdd', this.n)
            // },
            // incrementWait() {
            //     this.$store.dispatch('addWait', this.n)
            // },
            ...mapMutations({ increment: 'ADD', decrement: 'RED' }),
            ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'})
        },
        mounted() {
            console.log('Count', this.$store)
            // const x = mapState({sum: 'sum', xx: 'school', xk: 'subject'})
            // console.log(x)
        }
    }
</script>

<style>
    .btn {
        margin-left: 5px;
    }
</style>