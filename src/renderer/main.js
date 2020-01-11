import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import store from './store'
import CheckListOpcionesCheckList from './apiexterno/CheckListOpcionesCheckListController'
import {setIpc, sendIpc} from './lib/ipcRendererEvent'
import { AUTH_CONFIG } from './oauth/auth0-variables'

// include all css files
import './lib/VuelyCss'
// require('./assets/js/app')
// require('./assets/js/dashmix/app')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const DefaultLayout = () => import('./layouts/default-layout')
Vue.component('default-layout', DefaultLayout)
Vue.config.productionTip = false
Vue.use(Vuetify)
var EventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  methods: {
    cargar: function () {
      EventBus.$emit('cargar')
    }
  },
  mounted () {
    console.log('montando1111111111111111111111111111111111')
    setIpc()
  },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

window.newItem = () => {
  EventBus.$emit('cargar')
  sendIpc()
  console.log('Nuevo Item... sendIpc')
}
window.actualizarensitio = () => {
  console.log('Nuevo actualizarensitio')
  var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
  const cloclc = new CheckListOpcionesCheckList()
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, '64', 'CPU', 64, 'xxxxxx')
}
window.actualizarequipo = () => {
  console.log('Nuevo Equipo')
  var equipocpu = store.state.data.cpu
  var equipodata = JSON.parse(localStorage.getItem('equipodatax1'))
  const cloclc = new CheckListOpcionesCheckList()
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.brand, 'Brand')
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.cores, 'Cores')
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.manufacturer, 'Manufacturer')
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.model, 'Model')
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.revision, 'Revision')
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.speed, 'Speed')
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.speedmin, 'Speed Min')
  cloclc.getequiponumeroserie(equipodata.data.check_list_id, AUTH_CONFIG.CPU, equipocpu.speedmax, 'Speed Max')
}
