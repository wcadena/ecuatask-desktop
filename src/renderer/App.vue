<template>
  <div id="app">
    <div v-if="isLoading">
      <router-view></router-view>
    </div>
    <div v-else>
      Cargando
    </div>
  </div>
</template>

<script>
  export default {
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
