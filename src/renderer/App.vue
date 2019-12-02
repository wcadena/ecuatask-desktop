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
  export default {
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
