<template>
  <div>
    <list :data="data" />
  </div>
</template>

<script>
import List from '../components/List'

export default {
  name: 'cpu-page',
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
            img: require('@/static/cpu/cpu.svg')
          },
          {
            name: 'Cores',
            value: this.$store.state.data.cpu.cores,
            img: require('@/static/cpu/core.svg')
          },
          {
            name: 'Manufacturer',
            value: this.$store.state.data.cpu.manufacturer,
            img: require('@/static/cpu/manufacturer.svg')
          },
          {
            name: 'Model',
            value: this.$store.state.data.cpu.model,
            img: require('@/static/cpu/model.svg')
          },
          {
            name: 'Revision',
            value: this.$store.state.data.cpu.revision,
            img: require('@/static/cpu/revision.svg')
          },
          {
            name: 'Speed',
            value: this.$store.state.data.cpu.speed,
            img: require('@/static/cpu/speed.svg')
          },
          {
            name: 'Speed Min',
            value: this.$store.state.data.cpu.speedmin,
            img: require('@/static/cpu/speedmin.svg')
          },
          {
            name: 'Speed Max',
            value: this.$store.state.data.cpu.speedmax,
            img: require('@/static/cpu/speedmax.svg')
          }
        ]
      } catch (e) {
        return []
      }
    }
  }
}
</script>

