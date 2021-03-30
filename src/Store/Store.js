import Vue from 'vue'
import Vuex from 'vuex'

import { MUTATIONS }  from '../mutations/mutations'
 
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
      count: 0,
      data: {
        sum: 100000,
      },
      dataForm: []
    },
    mutations: {
      [MUTATIONS.SEND_FORM] (state, dataForm) {
        state.dataForm.push(dataForm)
      },
      
    },
    actions: {
      send_form({commit}, dataForm) {
        commit('SEND_FORM', dataForm)
      }
    }
})
