const app = {
  // 全剧状态
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  getters: {

  },
  actions: {
    myIncrease (context) {
      context.commit('increment')
    },
    myDecrease (context) {
      context.commit('decrement')
    }
  }
}

export default app
