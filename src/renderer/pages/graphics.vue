<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel v-for="(type, index, i) in controllers" :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down">{{type.model}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <list :data="getController(index)" />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel v-for="(type, index) in displays" :key="index">
        <v-expansion-panel-header expand-icon="mdi-menu-down">{{type.model}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <list :data="getDisplay(index)" />
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
  computed: {
    controllers () {
      try {
        return this.$store.state.data.graphics.controllers
      } catch (e) {
        return []
      }
    },
    displays () {
      try {
        return this.$store.state.data.graphics.displays
      } catch (e) {
        return []
      }
    }
  },
  methods: {
    getController (pos) {
      try {
        return [
          {
            name: 'Model',
            value: this.$store.state.data.graphics.controllers[pos].model,
            img: require(`@/static/graphics/controllers/model.svg`)
          },
          {
            name: 'Vendor',
            value: this.$store.state.data.graphics.controllers[pos].vendor,
            img: require(`@/static/graphics/controllers/vendor.svg`)
          },
          {
            name: 'VRAM',
            value: this.$store.state.data.graphics.controllers[pos].vram,
            img: require(`@/static/graphics/controllers/vram.svg`),
            unit: 'MB'
          },
          {
            name: 'VRAM Dynamic',
            value: this.$store.state.data.graphics.controllers[pos].vramDynamic,
            img: require(`@/static/graphics/controllers/vramdynamic.svg`)
          },
          {
            name: 'Bus',
            value: this.$store.state.data.graphics.controllers[pos].bus,
            img: require(`@/static/graphics/controllers/bus.svg`)
          }
        ]
      } catch (e) {
        console.log(e)
        return []
      }
    },
    getDisplay (pos) {
      try {
        return [
          {
            name: 'Model',
            value: this.$store.state.data.graphics.displays[pos].model,
            img: require(`@/static/graphics/displays/model.svg`)
          },
          {
            name: 'Main',
            value: this.$store.state.data.graphics.displays[pos].main,
            img: require(`@/static/graphics/displays/main.svg`)
          },
          {
            name: 'Resolution X',
            value: this.$store.state.data.graphics.displays[pos].resolutionx,
            img: require(`@/static/graphics/displays/resolutionx.svg`)
          },
          {
            name: 'Resolution Y',
            value: this.$store.state.data.graphics.displays[pos].resolutiony,
            img: require(`@/static/graphics/displays/resolutiony.svg`)
          },
          {
            name: 'Pixel Depth',
            value: this.$store.state.data.graphics.displays[pos].pixeldepth,
            img: require(`@/static/graphics/displays/pixeldepth.svg`)
          }
        ]
      } catch (e) {
        console.log(e)
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
