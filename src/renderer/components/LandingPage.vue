<template>
  <div v-if="isLogin">
    <instalacio></instalacio>
  </div>
  <div v-else>
    <lista-opciones></lista-opciones>
  </div>
</template>

<script>
  import Instalacio from './Instalacio'
  import ListaOpciones from '../pages/listaopciones'
  import AuthService from '../oauth/AuthService'
  import Vue from 'vue'

  require('../electron/menu')
  var EventBus = new Vue()

  export default {
    created: function () {
      EventBus.$on('cargar', function () {
        console.log('cargar todo!!!')
      })
    },
    mounted () {
      const auth = new AuthService()
      // console.log(auth, auth.isAuthenticated(), auth.authenticated)
      if (auth.isAuthenticated()) {
        this.isLogin = false
      }
    },
    data () {
      return {
        isLogin: true
      }
    },
    name: 'landing-page',
    components: { Instalacio, ListaOpciones }
  }
</script>

