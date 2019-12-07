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
          name: 'Distro',
          value: this.$store.state.data.os.distro,
          img: require(`@/static/os/platform/${this.$store.state.data.os.platform.toLowerCase()}.svg`)
        },
        {
          name: 'Arch',
          value: this.$store.state.data.os.arch,
          img: require(`@/static/os/arch/${this.$store.state.data.os.arch}.svg`)
        },
        {
          name: 'Release',
          value: this.$store.state.data.os.release,
          img: require(`@/static/os/release.svg`)
        },
        {
          name: 'Host Name',
          value: this.$store.state.data.os.hostname,
          img: require(`@/static/os/hostname.svg`)
        },
        {
          name: 'Users',
          value: this.$store.state.data.os.users,
          img: require(`@/static/os/users.svg`)
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
