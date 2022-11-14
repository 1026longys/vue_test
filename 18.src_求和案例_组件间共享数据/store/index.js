// 加该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备actions—用于响应组件中的动作
const actions = {
    addOdd(context, value) {
        if(context.state.sum % 2) {
            context.commit('ADD_NUM', value)
        }
    },
    addWait(context, value) {
        setTimeout(()=> {
            context.commit('ADD_NUM', value)
        }, 1000)
    },

}
// 准备mutations—用于操作数据(state)
const mutations = {
    ADD_NUM(state, value) {
        state.sum += value
    },
    RED(state, value) {
        state.sum -= value
    },
    ADD_PER(state, value) {
        state.personList.push(value)
    }
}
// 准备state—用于存储数据
const state = {
    sum: 0,
    school: '文达', 
    subject: '前端',
    personList: [
        {id: '001', name: '张三',}
    ]
} 
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})