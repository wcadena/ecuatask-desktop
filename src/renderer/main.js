import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import store from './store'
import {setIpc, sendIpc} from './lib/ipcRendererEvent'

// include all css files
import './lib/VuelyCss'
import ConsultaYsube from './lib/consultaYsubeAlApi'
import CheckListOpcionesCheckList from './apiexterno/CheckListOpcionesCheckListController'
import {AUTH_CONFIG} from './oauth/auth0-variables'
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
  new CheckListOpcionesCheckList().borrarOpcionCheclist(JSON.parse(localStorage.getItem('equipodatax1')).data.check_list_id, AUTH_CONFIG.SISTEMAS_OPERATIVOS)
  const cys = new ConsultaYsube()
  cys.consultaProgramas()
}
window.actualizarequipo = () => {
  const cys = new ConsultaYsube()
  let checklistid = JSON.parse(localStorage.getItem('equipodatax1')).data.check_list_id
  new CheckListOpcionesCheckList().borrarOpcionCheclist(checklistid, AUTH_CONFIG.CPU)
  new CheckListOpcionesCheckList().borrarOpcionCheclist(checklistid, AUTH_CONFIG.BATERIA)
  new CheckListOpcionesCheckList().borrarOpcionCheclist(checklistid, AUTH_CONFIG.SISTEMAS_OPERATIVOS)
  new CheckListOpcionesCheckList().borrarOpcionCheclist(checklistid, AUTH_CONFIG.INFORMACION_DEL_SISTEMA)
  new CheckListOpcionesCheckList().borrarOpcionCheclist(checklistid, AUTH_CONFIG.DISCOS)
  new CheckListOpcionesCheckList().borrarOpcionCheclist(checklistid, AUTH_CONFIG.GRAFICOS)
  cys.consultaCpu()
  cys.consultaBatery()
  cys.consultaSO()
  cys.consultaSistemImformation()
  cys.consultaDiscos()
  cys.consultaGraficos()
}
