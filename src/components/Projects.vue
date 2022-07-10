<template>
  <v-container id="projects">
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText--text my-0">02.03 - My Projects</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <v-row class="mx-0 my-0 align-center justify-center">
          <v-col
            :key="project.title"
            v-for="project in projectsList"
            cols="12"
            xl="3"
            sm="6"
            lg="4"
          >
            <c-project-card
              class="mx-auto darkLight"
              :title="project.title"
              :link="project.link"
              :description="project.description"
              :skills="project.skills"
            ></c-project-card>
          </v-col>
        </v-row>
        <v-row class="mx-0 my-0">
          <v-col class="text-center">
            <v-btn class="darkText--text mt-4" outlined href="https://github.com/AnandKumarRajpal" target="_blank">
              <v-icon class="mr-2">mdi-github</v-icon>
              View More
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "c-projects",
  components: {
    cProjectCard: ProjectCard,
  },
  created() {
    // this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    this.getProjectsList();
  },
  data() {
    return {
      projectsList: [],
    };
  },
  computed: {
    getNoRows() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm)
        return this.projectsList.length;
      return Math.ceil(this.projectsList.length / 3);
    },
    checkMobile() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.sm;
    },
  },
  methods: {
    ...mapActions({
      getProjects: "getProjects",
    }),
    getCols(idx) {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm)
        return this.projectsList.slice(idx, idx + 1);
      return this.projectsList.slice(3 * (idx - 1), 3 * idx);
    },
    getProjectsList() {
      this.getProjects().then((response) => {
        this.projectsList = response;
      });
    },
  },
};
</script>

<style>
</style>