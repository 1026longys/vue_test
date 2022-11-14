<template>
    <div class="category">
        <h2>当前求和为：{{$store.state.sum}}</h2>
        <h4>当前求和放大十倍为：{{$store.getters.bigSum}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button class="btn" @click="increment">+</button>
        <button class="btn" @click="decrement">-</button>
        <button class="btn" @click="incrementOdd">是奇数就加</button>
        <button class="btn" @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name: 'WdCount',
        data() {
            return {
                n: 1,
            }
        },
        methods: {
            increment() {
                this.$store.commit('Add', this.n)
            },
            decrement() {
                this.$store.commit('Reduce', this.n)
            },
            incrementOdd() {
                this.$store.dispatch('addOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('addWait', this.n)
            },
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