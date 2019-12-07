<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(position, index) in $store.state.data.diskLayout.length"
        :key="index"
      >
        <v-expansion-panel-header disable-icon-rotate >
          {{$store.state.data.diskLayout[index].name}}
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
  name: 'disk-page',
  components: {
    List
  },
  methods: {
    getDiskData (num) {
      try {
        return [
          {
            name: 'Name',
            value: this.$store.state.data.diskLayout[num].name,
            img: require('@/static/disk/name.svg')
          },
          {
            name: 'Type',
            value: this.$store.state.data.diskLayout[num].type,
            img: require('@/static/disk/type.svg')
          },
          {
            name: 'Firmware Revision',
            value: this.$store.state.data.diskLayout[num].firmwareRevision,
            img: require('@/static/disk/firmwarerevision.svg')
          },
          {
            name: 'Serial Num',
            value: this.$store.state.data.diskLayout[num].serialNum,
            img: require('@/static/disk/serialnum.svg')
          },
          {
            name: 'Size',
            value: Math.round(
              this.$store.state.data.diskLayout[num].size / 1000000000
            ),
            img: require('@/static/disk/size.svg'),
            unit: 'GB'
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
