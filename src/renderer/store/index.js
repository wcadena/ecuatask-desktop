import Vue from 'vue'
import Vuex from 'vuex'
import si from 'systeminformation'
import auth from './modules/auth'
import progra from 'proglistr'
const { getCurrentWindow } = require('electron').remote

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {
    data: null,
    title: 'System Information',
    prrogra: null
  },
  mutations: {
    setData (state, data) {
      state.data = data
    },
    setTitle (state, title) {
      state.title = title
    },
    setPrrogra (state, prrogra) {
      state.prrogra = prrogra
    }
  },
  actions: {
    async GET_DATA ({ commit }) {
      let data
      let prrogra
      try {
        data = await si.getAllData()
        prrogra = await progra
        prrogra.getProgs().then(data => data.forEach(program => { console.log(program) }))
        prrogra.getProgs().then(data => {
          commit('setPrrogra', data)
        })
      } catch (e) {
        getCurrentWindow().reload()
      }
      commit('setData', data)
    },
    SET_TITLE ({ commit }, title) {
      commit('setTitle', title)
    }
  },
  strict:
    process.env.NODE_ENV !== 'production'
})
