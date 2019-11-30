<template>
  <v-list two-line>
    <template v-for="item in data">
      <v-divider></v-divider>
      <v-list-item avatar>
        <v-list-item-avatar v-if="item.img">
          <img :src="item.img" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{item.name}}</v-list-item-title>
          <v-list-item-subtitle>{{item.value}} {{(item.unit) ? item.unit : ''}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
</style>
