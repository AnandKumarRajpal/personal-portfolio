<template>
  <v-container id="achievements">
    <v-row class="main-container align-center justify-center">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText--text my-0">02.04 - Achievements</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <v-row class="mx-0 my-0 align-center justify-center">
          <v-col
            :key="item.id"
            v-for="item in achievements"
            cols="12"
            xl="3"
            sm="6"
            lg="4"
          >
            <c-achievement-card
              class="mx-auto darkLight"
              :title="item.title"
              :description="item.description"
              :linkTitle="item.linkTitle"
              :link="item.link"
              :iconLink="item.iconLink"
            ></c-achievement-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AchievementCard from "./AchievementCard.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "c-achievements",
  data() {
    return {
      achievementsList: [],
    };
  },
  created() {
    this.setLoadingTrue();
    this.getAchievementsList();
  },
  components: {
    cAchievementCard: AchievementCard,
  },
  methods: {
    ...mapActions({
      getAchievements: "getAchievements",
    }),
    getAchievementsList() {
      this.getAchievements().then((response) => {
        this.achievementsList = response;
        this.setLoadingFalse();
      });
    },
    ...mapMutations({
      setLoadingTrue: "SET_LOADING_TRUE",
      setLoadingFalse: "SET_LOADING_FALSE",
    }),
  },
  computed: {
    achievements() {
      return this.achievementsList.slice().reverse();
    },
  },
};
</script>

<style>
</style>