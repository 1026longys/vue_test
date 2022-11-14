<template>
    <div class="category">
        <h2>当前求和为：{{sum}}</h2>
        <h4>当前求和放大十倍为：{{bigSum}}</h4>
        <h4>我在{{school}}，学习{{ subject }}</h4>
        <h4 style="color: red">Person组件人数为：{{personList.length}}</h4>
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
            ...mapState(['sum', 'school', 'subject', 'personList']),
            ...mapGetters(['bigSum']),
        },
        methods: {
            ...mapMutations({ increment: 'ADD_NUM', decrement: 'RED' }),
            ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'})
        },
        mounted() {
            console.log('Count', this.$store)
        }
    }
</script>

<style>
    .btn {
        margin-left: 5px;
    }
</style>