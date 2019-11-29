<template>
  <div>
    <list :data="data" />
    <img id="logo2" src="~@/static/cpu/cpu.svg" alt="electron-vue" hidden >
  </div>
</template>

<script>
import List from '../components/List'

export default {
  components: {
    List
  },
  computed: {
    data () {
      try {
        return [
          {
            name: 'Brand',
            value: this.$store.state.data.cpu.brand,
            img: `imgs/cpu--cpu.svg`
          },
          {
            name: 'Cores',
            value: this.$store.state.data.cpu.cores,
            img: `imgs/core--cpu.svg`
          },
          {
            name: 'Manufacturer',
            value: this.$store.state.data.cpu.manufacturer,
            img: `imgs/manufacturer--cpu.svg`
          },
          {
            name: 'Model',
            value: this.$store.state.data.cpu.model,
            img: `imgs/model--cpu.svg`
          },
          {
            name: 'Revision',
            value: this.$store.state.data.cpu.revision,
            img: `imgs/revision--cpu.svg`
          },
          {
            name: 'Speed',
            value: this.$store.state.data.cpu.speed,
            img: `imgs/speed--cpu.svg`
          },
          {
            name: 'Speed Min',
            value: this.$store.state.data.cpu.speedmin,
            img: `imgs/speedmin--cpu.svg`
          },
          {
            name: 'Speed Max',
            value: this.$store.state.data.cpu.speedmax,
            img: `imgs/speedmax--cpu.svg`
          }
        ]
      } catch (e) {
        return []
      }
    }
  }
}
</script>

