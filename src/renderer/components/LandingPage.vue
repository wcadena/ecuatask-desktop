<template>
  <div v-if="isLogin">
    <instalacio></instalacio>
  </div>
  <div v-else>
    <div v-if="cpu_show">
      <cpu-information></cpu-information>
    </div>
    <h1>Data</h1>
    <pre>{{ data}}</pre>
  </div>
</template>

<script>
  import Instalacio from './Instalacio'
  import CpuInformation from '../pages/cpu'
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
    components: { Instalacio, CpuInformation }
  }
</script>

