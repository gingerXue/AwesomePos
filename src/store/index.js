import Vue from 'vue'
import vuex from 'vuex'
import user from './user'
import app from './app'
Vue.use(vuex)

const store = new vuex.Store({
  modules: {
    app,
    user
  }
})

export default store
