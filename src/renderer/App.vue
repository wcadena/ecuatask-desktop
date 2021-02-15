<template>
  <div id="app">
    <div v-if="isLoading">
      <router-view  :auth="auth" :authenticated="authenticated"></router-view>
    </div>
    <div v-else>
      <cargando status="cargando"></cargando>
    </div>
  </div>
</template>

<script>
  import Cargando from './components/Cargando'
  import AuthService from './oauth/AuthService'
  const auth = new AuthService()
  const { login, authenticated, authNotifier, isAuthenticated } = auth

  export default {
    mounted () {
      if (!isAuthenticated) {
        if (login('PHGFJGUEY2F')) {
          console.log('cargalog')
          console.log(login)
        }
      } else {
        console.log('Ya esta logueado')
      }
    },
    components: {Cargando},
    name: 'ecuatask-desktop',
    data () {
      authNotifier.on('authChange', authState => {
        this.authenticated = authState.authenticated
      })
      return {
        auth,
        authenticated,
        isLoading: false
      }
    },
    async created () {
      await this.$store.dispatch('GET_DATA')
      this.isLoading = true
    }
  }
</script>

<style>
  /* CSS */
</style>
