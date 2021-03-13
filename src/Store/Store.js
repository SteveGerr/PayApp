import Vue from 'vue'
import Vuex from 'vuex'

import { MUTATIONS }  from '../mutations/mutations'
 
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
      count: 0,
      data: []
    },
    mutations: {
      [MUTATIONS.SEND_FORM] (state, dataForm) {
        state.data.push(dataForm)
      },
      
    },
    actions: {
      send_form({commit}, dataForm) {
        commit('SEND_FORM', dataForm)
      }
    }
})
