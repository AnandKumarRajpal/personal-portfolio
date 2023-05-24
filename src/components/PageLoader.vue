<template>
  <div class="pageLoader d-flex align-center justify-center">
    <div id="overlay"></div>
    <svg id="my-svg-1" viewBox="0 0 138 149" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_43_4)">
        <path
          d="M71.381 9.23809L119 115.111H95.3492L77.5714 76.2222H77.7302L69 56.8571L60.2699 76.2222L70.4286 98.4443H50.2699L49.9524 99.238L42.6508 115.111H19L66.6191 9.23809L68.8413 4L71.381 9.23809Z"
          :stroke="this.$vuetify.theme.dark ? 'url(#paint0_linear_43_4)' : 'black'" stroke-width="8" stroke-linejoin="round" shape-rendering="crispEdges" />
      </g>
      <defs>
        <filter id="filter0_d_43_4" x="0.167828" y="0" width="137.664" height="148.775" filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha" />
          <feOffset dy="14.8322" />
          <feGaussianBlur stdDeviation="7.41609" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_43_4" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_43_4" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_43_4" x1="41.4439" y1="59.5896" x2="96.1417" y2="59.5896"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#00DC82" />
          <stop offset="1" stop-color="#64FFDA" />
        </linearGradient>
      </defs>
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
        duration: 150,
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
  background-color: #111827; /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
#my-svg-1 {
  z-index: 3;
  width: 200px;
  overflow: visible;
}
</style>