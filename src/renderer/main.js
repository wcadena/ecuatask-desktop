import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify';

import { Vue2Dragula } from 'vue2-dragula'
import VueQuillEditor from 'vue-quill-editor'
import wysiwyg from 'vue-wysiwyg'
import VueBreadcrumbs from 'vue2-breadcrumbs'
import VueResource from 'vue-resource'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
import Nprogress from 'nprogress'
import VueI18n from 'vue-i18n'
import VueTour from 'vue-tour'
import fullscreen from 'vue-fullscreen'
//import InstantSearch from 'vue-instantsearch'
import VueVideoPlayer from 'vue-video-player';
import Croppa from 'vue-croppa';
// global components
import GlobalComponents from './globalComponent'
// router
import router from './router'
// store
//import { store } from './store/store';
import store from './store'

// firebase
import './firebase'

// include all css files
import './lib/VuelyCss'

// messages
import messages from './lang';

import axios from 'axios'
Vue.config.productionTip = false

// navigation guards before each
router.beforeEach((to, from, next) => {
  Nprogress.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem('user') === null) {
      next({
        path: '/session/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

// navigation guard after each
router.afterEach(() => {
  Nprogress.done()
  setTimeout(() => {
    const contentWrapper = document.querySelector(".v-main__wrap");
    if(contentWrapper !== null){
      contentWrapper.scrollTop = 0;
    }
    const boxedLayout = document.querySelector('.app-boxed-layout .app-content');
    if(boxedLayout !==  null){
      boxedLayout.scrollTop = 0;
    }
    const miniLayout = document.querySelector('.app-mini-layout .app-content');
    if(miniLayout !== null){
      miniLayout.scrollTop = 0;
    }
  }, 200);
})

// Vue.use(InstantSearch);
Vue.use(VueI18n)
Vue.use(VueTour)
Vue.use(Vue2Dragula)
Vue.use(VueQuillEditor)
Vue.use(VueResource)
Vue.use(wysiwyg, {})
Vue.use(VueBreadcrumbs)
Vue.use(Notifications, { velocity })
Vue.use(fullscreen);
Vue.use(GlobalComponents);
Vue.use(VueVideoPlayer);
Vue.use(Croppa);


const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})


import {setIpc, sendIpc} from './lib/ipcRendererEvent'

// include all css files
import './lib/VuelyCss'
import ConsultaYsube from './lib/consultaYsubeAlApi'
import CheckListOpcionesCheckList from './apiexterno/CheckListOpcionesCheckListController'
import {AUTH_CONFIG} from './oauth/auth0-variables'
import CheckListOpcionesCheckListController from './apiexterno/CheckListOpcionesCheckListController';
// require('./assets/js/app')
// require('./assets/js/dashmix/app')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = axios
Vue.config.productionTip = false

const DefaultLayout = () => import('./layouts/default-layout')
Vue.component('default-layout', DefaultLayout)
Vue.config.productionTip = false
Vue.use(vuetify)
Vue.use(GlobalComponents)
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
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')

window.newItem = () => {
  EventBus.$emit('cargar')
  sendIpc()
  console.log('Nuevo Item... sendIpc')
}
window.sincronizarequipofile = () => {
  var valoraenviar = {
    sistema:(store.state.data),
    programas:(store.state.prrogra)
  }

  const cloclc = new CheckListOpcionesCheckListController()
  cloclc.setequipofile(valoraenviar , localStorage.getItem('equipo3'))
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
