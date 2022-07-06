<template>
  <v-container>
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <p class="code-style">Hello, my name is</p>
        <h1 class="main-text">Anand Kumar</h1>
        <p class="code-style summary">Software Engineer</p>
        <c-programming-languages></c-programming-languages>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProgrammingLanguages from "./ProgrammingLanguages.vue";

export default {
  name: "HelloWorld",

  data: () => ({
    //
  }),
  components: {
    cProgrammingLanguages: ProgrammingLanguages,
  },
};
</script>

<style>
.main-container {
  margin: 5rem 0 0 0 !important;
}
.code-style {
  font-family: var(--font-mono);
  font-size: 1.25rem;
}
.main-text {
  font-family: var(--font-sans);
  font-size: 3rem;
}
.summary {
  margin-top: 16px;
  margin-bottom: 0 !important;
}
</style>