<template>
  <div v-if="isLogin">
    <instalacio></instalacio>
  </div>
  <div v-else>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel >
          <v-expansion-panel-header>CPU</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="cpu_show">
              <cpu-information></cpu-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel >
          <v-expansion-panel-header>Batería</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="battery_show">
              <battery-information></battery-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header>Discos</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="disk_show">
              <disk-information></disk-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header>Gráficos</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="graphics_show">
              <graphics-information></graphics-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header>Redes</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="network_show">
              <network-information></network-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header>Sistemas Operativos</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="os_show">
              <os-information></os-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header>Información de Sistema</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="system_show">
              <system-information></system-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel >
          <v-expansion-panel-header>Programas Instalados</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-if="program_show">
              <program-information></program-information>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </v-row>        
    <div v-if="false">
      <h1>Data</h1>
      <pre>{{ data}}</pre>
      <pre>{{program}}</pre>
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
  import OsInformation from '../pages/os'
  import SystemInformation from '../pages/system'
  import ProgramInformation from '../pages/programas'
  import AuthService from '../oauth/AuthService'
  require('../electron/menu')

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
        },
        os_show () {
          return false
        },
        system_show () {
          return false
        },
        program_show () {
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
      },
      program () {
        try {
          return [
            {
              value: this.$store.state.prrogra
            }
          ]
        } catch (e) {
          return []
        }
      }
    },
    name: 'landing-page',
    components: { Instalacio, CpuInformation, BatteryInformation, DiskInformation, GraphicsInformation, NetworkInformation, OsInformation, SystemInformation, ProgramInformation }
  }
</script>

