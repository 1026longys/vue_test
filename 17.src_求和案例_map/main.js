// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App.vue'

// 引入store
import store from './store'
// 关闭Vue的生产提示
Vue.config.productionTip = false


// 创建vm
new Vue({
    render: h=> h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app');

// console.log(vm)