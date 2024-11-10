<template>
  <v-container id="about">
    <v-row class="main-container align-center justify-center">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText section-heading my-0">01 - About Me</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <p>
          Hello, I'm Anand Kumar, an MSc. CS (Thesis) student at the <a href="https://ucalgary.ca/" target="_blank" class="darkText link">
            University of Calgary</a>.
        </p>
        <p>
          I am a passionate problem solver 💡 and a technophile with a keen interest in the latest technologies 🚀
        </p>
        <p>
          I'm particularly interested in deep learning and full-stack development 👨‍💻
        </p>
        <p>
          I have been working as a Software Engineer for the past 2 years, where I've had the privilege of showcasing my skills and expertise in developing innovative products 🌟
        </p>
        <p>
          I believe in using my knowledge and experience to make a positive impact on society 🌱
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