<template>
  <v-app dark>
    <v-app-bar app id="appBarMain">
      <v-container>
        <v-row class="mx-0 my-0">
          <div class="d-flex align-center my-2">
            <svg
              id="my-svg"
              viewBox="0 0 92 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.1263 6.95198L93.3263 103H71.8703L55.7423 67.72H55.8863L47.9663 50.152L40.0463 67.72L49.2623 87.88H30.9743L30.6863 88.6L24.0623 103H2.60626L45.8063 6.95198L47.8223 2.19998L50.1263 6.95198Z"
                stroke="white"
                stroke-width="5"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <v-spacer></v-spacer>

          <div class="d-none d-md-flex align-center">
            <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              text
            >
              <span><i class="fa-solid fa-user"></i></span>
              <span class="ml-2">About</span>
            </v-btn>

            <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              text
            >
              <span><i class="fa-solid fa-briefcase"></i></span>
              <span class="ml-2">Experience</span>
            </v-btn>

            <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              text
            >
              <span><i class="fa-solid fa-briefcase"></i></span>
              <span class="ml-2">Projects</span>
            </v-btn>

            <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              text
            >
              <span><i class="fa-solid fa-award"></i></span>
              <span class="ml-2">Achievements</span>
            </v-btn>

            <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank"
              text
            >
              <span><i class="fa-solid fa-phone"></i></span>
              <span class="ml-2">Contact</span>
            </v-btn>

            <v-btn icon @click="toggleDarkMode()">
              <!-- <Transition>
                <span v-if="darkMode" key="1"
                  ><i class="fa-solid fa-xl fa-sun"></i
                ></span>
                <span v-else key="2"
                  ><i class="fa-solid fa-xl fa-moon"></i
                ></span>
              </Transition> -->
              <transition name="slide-fade" mode="out-in">
                <span v-if="darkMode" key="1"
                  ><i class="fa-solid fa-xl fa-sun"></i
                ></span>
                <span v-else key="2"
                  ><i class="fa-solid fa-xl fa-moon"></i
                ></span>
              </transition>
            </v-btn>
          </div>

          <v-app-bar-nav-icon
            class="d-flex d-sm-flex d-md-none"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HelloWorld data-aos="fade-up-right" />
      <c-about data-aos="fade-up-left" data-aos-offset="250"></c-about>
      <c-work-experience
        data-aos="fade-up-right"
        data-aos-offset="250"
      ></c-work-experience>
      <c-projects data-aos="fade-up-left" data-aos-offset="250"></c-projects>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import About from "./components/About.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Projects from "./components/Projects.vue";
import Vivus from "vivus";

export default {
  name: "App",

  mounted() {
    this.vivus = new Vivus("my-svg", {
      duration: 100,
    });
  },

  components: {
    HelloWorld,
    cAbout: About,
    cWorkExperience: WorkExperience,
    cProjects: Projects,
  },

  data: () => ({
    drawer: false,
    vivus: null,
  }),

  computed: {
    darkMode() {
      return this.$vuetify.theme.dark;
    },
  },

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style>
#my-svg {
  overflow: visible;
  width: 30px;
}
.head-containter {
  max-width: 80%;
}

#appBarMain .v-toolbar__content {
  padding: 0 !important;
}

:root {
  --font-sans: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  --font-mono: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>