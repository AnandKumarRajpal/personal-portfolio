<template>
  <v-container>
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <p class="code-style">03 - My Projects</p>
        <v-row class="mx-0 my-0" v-for="rowIdx in Math.ceil(projectsList.length / 3)" :key="rowIdx">
          <v-col :key="project.title" v-for="project in projectsList.slice(3 * (rowIdx - 1), 3 * rowIdx)">
            <c-project-card
              :title="project.title"
              :link="project.link"
              :description="project.description"
              :skills="project.skills"
            ></c-project-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "c-projects",
  components: {
    cProjectCard: ProjectCard,
  },
  created() {
    // this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    this.getProjectsList()
  },
  data() {
    return {
      projectsList: [],
    };
  },
  methods: {
    ...mapActions({
        getProjects: 'getProjects'
    }),
    getProjectsList () {
        this.getProjects().then((response) => {
            this.projectsList = response
        })
    },
  }
};
</script>

<style>
</style>