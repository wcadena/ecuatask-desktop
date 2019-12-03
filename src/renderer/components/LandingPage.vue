<template>
  <div>
    <instalacio></instalacio>
  </div>
</template>

<script>
  import Instalacio from './Instalacio'
  import AuthService from '../oauth/AuthService'
  console.log('Hola mundo')

  export default {
    name: 'landing-page',
    components: { Instalacio, AuthService }
  }
</script>

