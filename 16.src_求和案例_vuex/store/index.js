// 加该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备actions—用于响应组件中的动作
const actions = {
    // add(context, value) {
    //     // console.log('actions中的add被调用了', context, value)
    //     context.commit('Add', value)
    // },
    // reduce(context, value) {
    //     context.commit('Reduce', value)
    // },
    addOdd(context, value) {
        if(context.state.sum % 2) {
            context.commit('Add', value)
        }
    },
    addWait(context, value) {
        setTimeout(()=> {
            console.log(this)
            context.commit('Add', value)
        }, 1000)
    },

}
// 准备mutations—用于操作数据(state)
const mutations = {
    Add(state, value) {
        // console.log('mutations中的add被调用了', state, value)
        state.sum += value
    },
    Reduce(state, value) {
        state.sum -= value
    }
}
// 准备state—用于存储数据
const state = {
    sum: 0,
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