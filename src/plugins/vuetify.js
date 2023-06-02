import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors÷'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        background: '#111827',
        darkLight: "#2F3A3E",
        primary: "#2dd4bf"
      },
      light: {
        background: '#f5f5f5',
        primary: "#14b8a5"
      }
    },
  },
});
