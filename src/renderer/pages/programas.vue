<template>
  <div v-if="$store.state.prrogra">
      <div
              v-for="(position, index) in $store.state.prrogra.length"
              :key="index"
      >
        <list :data="getAplicaData(index)" />
      </div>
  </div>
  <div v-else>
    <cargando status="Cargando"></cargando>
  </div>
</template>

<script>
  import List from '../components/List'
  import Cargando from '../components/Cargando'

  export default {
    name: 'disk-page',
    components: {
      List, Cargando
    },
    methods: {
      getAplicaData (num) {
        try {
          return [
            {
              name: '[' + (num + 1) + ']' + this.$store.state.prrogra[num].name,
              value: this.$store.state.prrogra[num].version,
              img: require('@/static/os/release.svg')
            }
          ]
        } catch (e) {
          return []
        }
      }
    }
  }
</script>

<style scoped>
</style>
