// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App.vue'

// // 引入ElementUI组件库
// import ElementUI from 'element-ui';
// // 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

import {Button, Row, DatePicker } from 'element-ui'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Row)
 * Vue.use(DatePicker)
 */

// 创建vm
new Vue({
    render: h=> h(App),
}).$mount('#app');
