<template>
  <div v-if="isLogin">
    <instalacio></instalacio>
  </div>
  <div v-else>
    <div v-if="!cpu_show">
      <cpu-information></cpu-information>
    </div>
    <div v-if="!battery_show">
      <battery-information></battery-information>
    </div>
    <div v-if="!disk_show">
      <disk-information></disk-information>
    </div>
    <div v-if="!graphics_show">
      <graphics-information></graphics-information>
    </div>
    <div v-if="network_show">
      <network-information></network-information>
    </div>
    <div v-if="false">
      <h1>Data</h1>
      <pre>{{ data}}</pre>
    </div>
  </div>
</template>

<script>
  import Instalacio from './Instalacio'
  import CpuInformation from '../pages/cpu'
  import BatteryInformation from '../pages/battery'
  import DiskInformation from '../pages/disk'
  import GraphicsInformation from '../pages/graphics'
  import NetworkInformation from '../pages/network'
  import AuthService from '../oauth/AuthService'

  export default {
    mounted () {
      const auth = new AuthService()
      // console.log(auth, auth.isAuthenticated(), auth.authenticated)
      if (auth.isAuthenticated()) {
        this.isLogin = false
      }
    },
    data () {
      return {
        isLogin: true,
        cpu_show () {
          return false
        },
        battery_show () {
          return false
        },
        disk_show () {
          return false
        },
        graphics_show () {
          return false
        },
        network_show () {
          return false
        }
      }
    },
    computed: {
      data () {
        try {
          return [
            {
              value: this.$store.state.data
            }
          ]
        } catch (e) {
          return []
        }
      }
    },
    name: 'landing-page',
    components: { Instalacio, CpuInformation, BatteryInformation, DiskInformation, GraphicsInformation, NetworkInformation }
  }
</script>

