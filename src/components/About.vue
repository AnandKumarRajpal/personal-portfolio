<template>
  <v-container>
    <v-row class="main-container align-center justify-center">
      <v-col class="px-0 py-0">
        <p class="code-style">01 - About Me</p>
        <v-img
          src="@/assets/avatar.svg"
          height="250"
          width="250"
          contain
          class="mx-auto mb-8"
        ></v-img>
        <p>
          I've always been a great problem solver, and a technophile obsessed
          with the latest devices. I am passionate about front-end development,
          app development, artificial intelligence and building products that
          can help the marginalized people of our society. Today, I'm working as
          an associate software engineer for
          <a>Securiti</a>, and I get to show off all these elements of who I am.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "c-about",
};
</script>

<style>
.overflow-wrap {
  inline-size: 50%;
  overflow-wrap: break-word;
}
</style>