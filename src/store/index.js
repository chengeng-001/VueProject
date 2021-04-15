import { createStore } from 'vuex'

export default createStore({
  state: {
    isShow: false
  },
  mutations: {
    hide(state) {
      state.isShow = true;
    },
    show(state) {
      state.isShow = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
