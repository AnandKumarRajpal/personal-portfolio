import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors÷'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          dark: {
            // darkText: "#00B4D8",
            darkText: "#64ffda",
            background: '#101820',
            darkLight: "#2F3A3E",

          },
        },
      },
});
