<template>
  <div class="mt-16">
    <p class="code-style font-weight-bold darkText--text">
      Languages I work with:
    </p>
    <v-row class="mx-0 my-0">
      <v-col>
        <v-img
          src="@/assets/html.svg"
          title="HTML 5"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/css.svg"
          title="CSS 3"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/js.svg"
          title="JavaScript"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-divider vertical class="divider-border"></v-divider>
      <v-col>
        <v-img
          src="@/assets/python.svg"
          title="Python3"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/c.svg"
          title="C"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/cpp.svg"
          title="C++"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/php.svg"
          title="PHP"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-divider vertical class="divider-border"></v-divider>
      <v-col>
        <v-img
          src="@/assets/vuejs.svg"
          title="VueJS"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/flutter.svg"
          title="Flutter"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          src="@/assets/wp.svg"
          title="WordPress"
          height="70"
          width="70"
          contain
          class="mx-auto pro-lang"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "c-programming-languages",
};
</script>

<style>
.pro-lang {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  transition: 0.5s;
}
.pro-lang:hover {
  filter: none;
  -webkit-filter: grayscale(0);
}
</style>