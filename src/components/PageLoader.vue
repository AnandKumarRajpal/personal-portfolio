<template>
  <div class="pageLoader d-flex align-center justify-center">
    <div id="overlay"></div>
    <svg
      id="my-svg-1"
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
  </div>
</template>

<script>
import Vivus from "vivus";
import { mapMutations } from "vuex";

export default {
  name: "c-page-loader",
  mounted() {
    this.setLoadingTrue();
    this.vivus = new Vivus(
      "my-svg-1",
      {
        duration: 100,
      },
      (myVivus) => {
        if (myVivus.getStatus() === "end") {
          this.setLoadingFalse();
          myVivus.reset().play();
        }
      }
    );
  },
  methods: {
    ...mapMutations({
      setLoadingTrue: "SET_LOADING_TRUE",
      setLoadingFalse: "SET_LOADING_FALSE",
    }),
  },
};
</script>

<style scoped>
.pageLoader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
}
#overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #101820; /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
#my-svg-1 {
  z-index: 3;
  width: 150px;
  overflow: visible;
}
</style>