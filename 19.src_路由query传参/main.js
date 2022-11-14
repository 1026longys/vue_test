// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App.vue'
// 引入vueRouter插件库
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(VueRouter)

// 创建vm
new Vue({
    render: h=> h(App),
    router: router,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app');

// console.log(vm)