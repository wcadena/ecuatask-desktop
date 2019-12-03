<template>
  <div id="app">
    <div v-if="isLoading">
      <router-view></router-view>
    </div>
    <div v-else>
      <cargando></cargando>
    </div>
  </div>
</template>

<script>
  import Cargando from './components/Cargando'
  import AuthService from './oauth/AuthService'
  const auth = new AuthService()
  const { login } = auth

  export default {
    mounted () {
      if (login('PHGFJGUEY2F')) {
        console.log('cargalog')
        console.log(login)
      }
      console.log('carga1')
    },
    components: {Cargando},
    name: 'ecuatask-desktop',
    data () {
      return {
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
