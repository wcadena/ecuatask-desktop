<template>
  <div>
    <list :data="data" />
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
      return [
        {
          name: 'Baseboard Manufacturer',
          value: this.$store.state.data.baseboard.manufacturer,
          img: require('@/static/system/baseboard/manufacturer.svg')
        },
        {
          name: 'Baseboard Model',
          value: this.$store.state.data.baseboard.model,
          img: require('@/static/system/baseboard/model.svg')
        },
        {
          name: 'Baseboard Serial',
          value: this.$store.state.data.baseboard.serial,
          img: require('@/static/system/baseboard/serial.svg')
        },
        {
          name: 'Baseboard Version',
          value: this.$store.state.data.baseboard.version,
          img: require('@/static/system/baseboard/version.svg')
        },
        {
          name: 'Bios',
          value: this.$store.state.data.bios.vendor,
          img: require('@/static/system/bios/vendor.svg')
        },
        {
          name: 'System Manufacturer',
          value: this.$store.state.data.system.manufacturer,
          img: require('@/static/system/system/manufacturer.svg')
        },
        {
          name: 'System Serial',
          value: this.$store.state.data.system.serial,
          img: require('@/static/system/system/serial.svg')
        },
        {
          name: 'System Model',
          value: this.$store.state.data.system.model,
          img: require('@/static/system/system/model.svg')
        },
        {
          name: 'System UUID',
          value: this.$store.state.data.system.uuid,
          img: require('@/static/system/system/uuid.svg')
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
