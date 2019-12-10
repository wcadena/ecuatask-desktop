<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel
              v-for="(position, index) in $store.state.data.net.length"
              :key="index"
      >
        <v-expansion-panel-header disable-icon-rotate >
          {{$store.state.data.net[index].ifaceName}}<span v-if="$store.state.data.networkStats[0].iface.toLowerCase() == $store.state.data.net[index].iface.toLowerCase()">Tarjeta Activa</span>
          <template v-slot:actions>
            <v-icon color="teal">mdi-check</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <list :data="getDiskData(index)" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import List from '../components/List'
export default {
  components: {
    List
  },
  methods: {
    getDiskData (num) {
      try {
        return [
          {
            name: 'Name',
            value: this.$store.state.data.net[num].iface,
            img: require(`@/static/network/name.svg`)
          },
          {
            name: 'IP v4',
            value: this.$store.state.data.net[num].ip4,
            img: require(`@/static/network/ip4.svg`)
          },
          {
            name: 'IP v6',
            value: this.$store.state.data.net[num].ip6,
            img: require(`@/static/network/ip6.svg`)
          },
          {
            name: 'MAC',
            value: this.$store.state.data.net[num].mac,
            img: require(`@/static/network/mac.svg`)
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
