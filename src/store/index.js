import { createStore } from 'vuex'

export default createStore({
  state: {
      opened: false
  },
  mutations: {
      SET_OPENED(state, value){
        state.opened = value;
      }
  },
  actions: {
  },
  modules: {
  }
})
