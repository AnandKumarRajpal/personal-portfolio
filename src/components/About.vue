<template>
  <v-container id="about">
    <v-row class="main-container align-center justify-center">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText section-heading my-0">01 - About Me</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <p>
          Hello! I'm Anand Kumar, a Computer Science graduate from
          <a href="https://habib.edu.pk/" target="_blank" class="darkText link"
            >Habib University, Karachi</a
          >. I've always been a great problem solver, and a technophile obsessed
          with the latest devices. I am passionate about front-end development,
          app development, artificial intelligence and building products that
          can help the marginalized people of our society. Today, I'm working as
          an associate software engineer for
          <a class="darkText link" target="_blank" href="https://securiti.ai/">Securiti</a
          >, and I get to show off all these elements of who I am.
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
.link {
  text-decoration: none;
}
</style>