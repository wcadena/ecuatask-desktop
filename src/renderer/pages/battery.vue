<template>
  <div>
    <list :data="data" />
  </div>
</template>

<script>
import List from '../components/List'

export default {
  name: 'battery-page',
  components: {
    List
  },
  computed: {
    data () {
      try {
        return [
          {
            name: 'Is Charging',
            value: this.$store.state.data.battery.ischarging,
            img: require('@/static/battery/ischarging.svg')
          },
          {
            name: 'Max Capacity',
            value: this.$store.state.data.battery.maxcapacity,
            img: require('@/static/battery/maxcapacity.svg')
          },
          {
            name: 'Current Capacity',
            value: this.$store.state.data.battery.currentcapacity,
            img: require('@/static/battery/currentcapacity.svg')
          },
          {
            name: 'Percent',
            value: this.$store.state.data.battery.percent,
            img: require('@/static/battery/percent.svg')
          }
        ]
      } catch (e) {
        return []
      }
    }
  }
}
</script>

