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
      let iface = this.$store.state.data.networkStats[0].iface
      let net = this.$store.state.data.net.filter(
        data => data.iface === iface
      )[0]
      return [
        {
          name: 'Name',
          value: net.iface,
          img: require(`@/static/network/name.svg`)
        },
        {
          name: 'IP v4',
          value: net.ip4,
          img: require(`@/static/network/ip4.svg`)
        },
        {
          name: 'IP v6',
          value: net.ip6,
          img: require(`@/static/network/ip6.svg`)
        },
        {
          name: 'MAC',
          value: net.mac,
          img: require(`@/static/network/mac.svg`)
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
