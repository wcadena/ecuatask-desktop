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
  const cys = new ConsultaYsube()
  cys.consultaProgramas()
}
window.actualizarequipo = () => {
  const cys = new ConsultaYsube()
  cys.consultaCpu()
  cys.consultaBatery()
  cys.consultaSO()
  cys.consultaSistemImformation()
  cys.consultaDiscos()
  cys.consultaGraficos()
}
