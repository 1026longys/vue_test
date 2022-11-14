<template>
    <div class="container">
        <Category title="游戏">
            <template v-slot:default="{games}">
                <ul>
                    <li v-for="(item, index) in games" :key="index">{{ item }}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
            <template #default="{games, msg}">
                <ol>
                    <li style="color: red;" v-for="(item, index) in games" :key="index">{{ item }}</li>
                </ol>
                <h4>{{msg}}</h4>
            </template>
        </Category>
        <Category title="游戏">
            <template scope="wd">
                <h4 v-for="(item, index) in wd.games" :key="index">{{ item }}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: {Category},
    }
</script>

<style>
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>