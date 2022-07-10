<template>
  <v-app dark :style="{ background: $vuetify.theme.themes[theme].background }">
    <!-- PageLoader -->
    <transition name="custom-fade" mode="out-in">
      <c-page-loader v-if="isLoading"></c-page-loader>
    </transition>
    <!-- PageLoader end -->

    <!-- Navbar -->
    <v-app-bar app id="appBarMain" class="darkLight">
      <v-container>
        <v-row class="mx-0 my-0">
          <div class="d-flex align-center my-2">
            <a href="#">
              <svg
                id="my-svg"
                viewBox="0 0 92 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.1263 6.95198L93.3263 103H71.8703L55.7423 67.72H55.8863L47.9663 50.152L40.0463 67.72L49.2623 87.88H30.9743L30.6863 88.6L24.0623 103H2.60626L45.8063 6.95198L47.8223 2.19998L50.1263 6.95198Z"
                  :stroke="this.$vuetify.theme.dark ? '#64ffda' : 'black'"
                  stroke-width="5"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>

          <v-spacer></v-spacer>

          <div class="d-none d-md-flex align-center">
            <v-btn href="#about" text class="darkText--text">
              <span><i class="fa-solid fa-user"></i></span>
              <span class="ml-2">About</span>
            </v-btn>

            <div class="text-center">
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    href="#portfolio"
                    text
                    class="darkText--text"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <span><i class="fa-solid fa-folder-closed"></i></span>
                    <span class="ml-2">Portfolio</span>
                  </v-btn>
                </template>

                <v-list class="darkLight">
                  <v-list-item
                    v-for="(item, index) in portfolioMenu"
                    :key="index"
                  >
                    <v-btn
                      :href="item.link"
                      text
                      class="darkText--text"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span
                        ><i class="fa-solid" :class="'fa-' + item.icon"></i
                      ></span>
                      <span class="ml-2">{{ item.title }}</span>
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <v-btn href="#contact" text class="darkText--text">
              <span><i class="fa-solid fa-phone"></i></span>
              <span class="ml-2">Contact</span>
            </v-btn>

            <v-btn href="/AnandKumar-Resume.pdf" target="_blank" class="darkText--text" text>
              <span><i class="fa-solid fa-file"></i></span>
              <span class="ml-2">Resume</span>
            </v-btn>

            <v-btn icon @click="toggleDarkMode()" class="darkText--text">
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
            class="d-flex d-sm-flex d-md-none darkText--text"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      bottom
      temporary
      class="darkLight"
    >
      <v-list nav>
        <v-list-item-group v-model="activeItem">
          <v-list-item href="#about" @click="toggleDrawer()">
            <v-list-item-icon>
              <v-icon class="darkText--text">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="darkText--text">About</v-list-item-title>
          </v-list-item>

          <v-list-item
            v-for="(item, index) in portfolioMenu"
            :key="index"
            :href="item.link"
            @click="toggleDrawer()"
          >
            <v-list-item-icon>
              <v-icon class="darkText--text" v-text="item.mobIcon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="darkText--text"
              v-text="item.title"
            ></v-list-item-title>
          </v-list-item>

          <v-list-item href="#contact" @click="toggleDrawer()">
            <v-list-item-icon>
              <v-icon class="darkText--text">mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="darkText--text"
              >Contact</v-list-item-title
            >
          </v-list-item>

          <v-list-item @click="toggleDarkMode()">
            <v-list-item-icon class="darkText--text">
              <transition name="slide-fade" mode="out-in">
                <span v-if="darkMode" key="1"
                  ><i class="fa-solid fa-xl fa-sun"></i
                ></span>
                <span v-else key="2"
                  ><i class="fa-solid fa-xl fa-moon"></i
                ></span>
              </transition>
            </v-list-item-icon>
            <v-list-item-title class="darkText--text"
              >Switch to {{ themeOpposite }} mode</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navbar end -->

    <v-main>
      <HelloWorld data-aos="fade-up-right" />
      <c-about data-aos="fade-up-left" data-aos-offset="250"></c-about>
      <c-work-experience
        data-aos="fade-up-right"
        data-aos-offset="250"
      ></c-work-experience>
      <c-education data-aos="fade-up-left" data-aos-offset="250"></c-education>
      <c-projects data-aos="fade-up-right" data-aos-offset="250"></c-projects>
      <c-achievements
        data-aos="fade-up-left"
        data-aos-offset="250"
      ></c-achievements>
      <c-contact></c-contact>
      <c-footer></c-footer>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import About from "./components/About.vue";
import WorkExperience from "./components/WorkExperience.vue";
import Projects from "./components/Projects.vue";
import Achievements from "./components/Achievements.vue";
import Education from "./components/Education.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import PageLoader from "./components/PageLoader.vue";
import Vivus from "vivus";
import { mapGetters } from "vuex";

export default {
  name: "App",

  mounted() {
    this.vivus = new Vivus("my-svg", {
      duration: 100,
    });
    this.$vuetify.theme.dark = true;
  },

  components: {
    HelloWorld,
    cAbout: About,
    cWorkExperience: WorkExperience,
    cProjects: Projects,
    cAchievements: Achievements,
    cEducation: Education,
    cContact: Contact,
    cFooter: Footer,
    cPageLoader: PageLoader,
  },

  data: () => ({
    drawer: false,
    vivus: null,
    portfolioMenu: [
      {
        link: "#portfolio",
        title: "Work Experience",
        icon: "briefcase",
        mobIcon: "mdi-briefcase",
      },
      {
        link: "#education",
        title: "Education",
        icon: "graduation-cap",
        mobIcon: "mdi-school",
      },
      {
        link: "#projects",
        title: "Projects",
        icon: "gears",
        mobIcon: "mdi-cogs",
      },
      {
        link: "#achievements",
        title: "Achievements",
        icon: "trophy",
        mobIcon: "mdi-trophy",
      },
    ],
    on: null,
    attrs: null,
    activeItem: null,
  }),

  computed: {
    darkMode() {
      return this.$vuetify.theme.dark;
    },
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    themeOpposite() {
      return this.$vuetify.theme.dark ? "light" : "dark";
    },
    ...mapGetters({
      isLoading: "isLoading",
    }),
  },

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.drawer = false;
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
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
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.custom-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.custom-fade-enter, .custom-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
</style>