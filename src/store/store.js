import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    result: 0
  },
  getters: {
    // state la parameter
    tenResult: state => {
      return state.result * 10
    }
  }
})
