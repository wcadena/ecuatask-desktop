import Vue from 'vue'
import Vuex from 'vuex'
import si from 'systeminformation'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'
const { getCurrentWindow } = require('electron').remote

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  actions: {
    async GET_DATA ({ commit }) {
      let data
      try {
        data = await si.getAllData()
      } catch (e) {
        getCurrentWindow().reload()
      }
      commit('setData', data)
    },
    SET_TITLE ({ commit }, title) {
      commit('setTitle', title)
    }
  },
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
