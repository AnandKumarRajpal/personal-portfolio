<template>
  <v-card
    width="320"
    min-height="400"
    class="d-flex flex-column"
    rounded="lg"
    elevation="5"
  >
    <div class="d-flex align-center justify-center">
      <img :src="require('@/' + iconLink)" height="100" alt="" class="my-4" :class="{ 'filter': !$vuetify.theme.dark && !noFilter }" />
    </div>
    <v-card-title style="word-break: break-word">{{ title }}</v-card-title>
    <v-card-text
      style="flex: 1 1 auto"
      class="d-flex flex-column justify-space-between"
    >
      <p>{{ description }}</p>
      <div>
        <v-divider></v-divider>
        <p v-if="link !== null" class="mt-4 mb-0" ><a :href="link" target="_blank" :style="{'color': this.$vuetify.theme.dark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'}"> {{ linkTitle }} </a></p>
        <p v-else class="mt-4 mb-0">{{ linkTitle }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "c-achievement-card",
    props: {
      title: String,
      link: String,
      description: String,
      iconLink: String,
      linkTitle: String,
      noFilter: {
        type: Boolean,
        default: false
      }
    },
};
</script>

<style>
.filter {
  filter: invert(0.54);
}
</style>