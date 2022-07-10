import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingTimes: 0,
    loading: false
  },
  getters: {
    isLoading(state) {
      return state.loading
    }
  },
  mutations: {
    SET_LOADING_TRUE (state) {
      state.loadingTimes += 1
      state.loading = true
    },
    SET_LOADING_FALSE (state) {
      if (state.loadingTimes === 1) {
        state.loadingTimes -= 1
        state.loading = false
      } else {
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
  },
  modules: {
  }
})
