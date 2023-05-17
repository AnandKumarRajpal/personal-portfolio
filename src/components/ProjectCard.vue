<template>
  <v-card
    width="350"
    min-height="350"
    class="d-flex flex-column gradient-border-color"
    rounded
  >
    <v-card-title style="flex: 0 1 auto">
      <v-row class="mx-0 my-0 align-center justify-center">
        <v-col cols="10" class="px-0 py-0">
          <span style="word-break: break-word">{{ title }}</span></v-col
        >
        <v-col cols="2" class="py-0 px-0">
          <a
            v-if="link !== null"
            :href="link"
            style="text-decoration: none"
            class="mx-auto text-center"
          >
            <v-icon large style="width: 100%"> mdi-github </v-icon></a
          >
        </v-col>
      </v-row>
    </v-card-title>

    <v-card-text
      style="flex: 1 1 auto"
      class="d-flex flex-column justify-space-between"
    >
      <ul class="mb-4">
        <li v-for="item in description" :key="item" v-html="item"></li>
      </ul>
      <div>
        <v-divider></v-divider>
        <p id="languages" class="code-style mt-4 mb-0">{{ getSkills }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "c-project-card",
  props: {
    title: String,
    link: String,
    description: Array,
    skills: Array,
  },
  computed: {
    getSkills() {
      return this.skills.join(", ");
    },
  },
};
</script>

<style>
#languages {
  font-size: 0.875rem;
}
</style>