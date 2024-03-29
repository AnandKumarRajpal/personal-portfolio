import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingTimes: 0,
    loading: true
  },
  getters: {
    isLoading(state) {
      return state.loading
    }
  },
  mutations: {
    SET_LOADING_TRUE(state) {
      state.loadingTimes += 1
      state.loading = true
    },
    SET_LOADING_FALSE(state) {
      if (state.loadingTimes === 1) {
        state.loadingTimes -= 1
        state.loading = false
      } else if (state.loadingTimes > 0) {
        state.loadingTimes -= 1
      }
    }
  },
  actions: {
    async getProjects() {
      const projectsCol = collection(db, "projects");
      const projectsSnapshot = await getDocs(projectsCol);
      const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
      return projectsList
    },
    async getExperience() {
      const experienceCol = collection(db, "experience");
      const experienceSnapshot = await getDocs(experienceCol);
      const experienceList = experienceSnapshot.docs.map((doc) => doc.data());
      return experienceList
    },
    async getAchievements() {
      const achievementsCol = collection(db, "achievements");
      const achievementsSnapshot = await getDocs(achievementsCol);
      const achievementsList = achievementsSnapshot.docs.map((doc) => doc.data());
      return achievementsList
    },
  },
  modules: {
  }
})
