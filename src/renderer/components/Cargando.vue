<template>
  <div>
    <div class="loader-overlay" v-if="status">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <h1>Cargando</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['status']
}
</script>
