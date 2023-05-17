import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors÷'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        background: '#101820',
        darkLight: "#2F3A3E",
        primary: "#00DC82"
      },
      light: {
        primary: "#00DC82"
      }
    },
  },
});
