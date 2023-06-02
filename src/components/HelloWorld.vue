<template>
  <v-container>
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <v-row no-gutters align="center" justify="center">
          <v-col cols="12" class="d-flex d-sm-none mb-4">
            <v-img
              src="@/assets/avatar.png"
              height="250"
              width="250"
              contain
            ></v-img>
          </v-col>
          <v-col>
            <h1 class="main-text">
              Hello, I'm <br />
              <span class="darkText">Anand Kumar</span> <br />
              Software Engineer @ Securiti.ai
            </h1>
          </v-col>
          <v-col class="flex-grow-0 d-none d-sm-flex">
            <v-img
              src="@/assets/avatar.png"
              height="250"
              width="250"
              contain
            ></v-img>
          </v-col>
        </v-row>
        <c-programming-languages></c-programming-languages>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProgrammingLanguages from "./ProgrammingLanguages.vue";

export default {
  name: "HelloWorld",
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
  font-size: 2.75rem;
  font-weight: 800;
}

@media (max-width: 600px) {
  .main-text {
    font-size: 2.25rem;
    text-align: center;
  }
  .main-container {
    margin: 3rem 0 0 0 !important;
  }
}

.summary {
  margin-top: 16px;
  margin-bottom: 0 !important;
}
</style>
