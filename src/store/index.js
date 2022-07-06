import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: true
  },
  getters: {
    getDarkModeStatus(state) {
      return state.darkMode
    }
  },
  mutations: {
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
