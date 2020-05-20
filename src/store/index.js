import Vue from 'vue'
import Vuex from 'vuex'
//挂载Vuex
Vue.use(Vuex)

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

//创建VueX对象
export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})