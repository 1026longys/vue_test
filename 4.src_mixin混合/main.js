// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App.vue'

// 全局混合
import {hunhe, hunhe2} from './mixin'

// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

// 创建vm
new Vue({
    render: h=> h(App)
}).$mount('#app');
