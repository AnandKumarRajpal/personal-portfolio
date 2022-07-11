<template>
  <v-container id="contact">
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText--text my-0">03 - Contact</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <div class="text-center">
          <v-btn
            v-for="(icon, index) in icons"
            :key="icon"
            class="mx-6 my-4"
            icon
            :href="iconLink[index]"
            target="_blank"
          >
            <v-icon size="42px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "c-contact",
  data() {
    return {
      icons: [
        "mdi-facebook",
        "mdi-twitter",
        "mdi-linkedin",
        "mdi-github",
        "mdi-whatsapp",
        "mdi-email",
        "mdi-phone",
      ],
      iconLink: [
        "https://www.facebook.com/Anand.Kumar.Rajpal",
        "https://twitter.com/rajpal_anand",
        "https://www.linkedin.com/in/anand-kumar-rajpal/",
        "https://github.com/AnandKumarRajpal/",
        "https://wa.me/923462490616",
        "mailto:ak05173@st.habib.edu.pk",
        "tel:+923462490616",
      ],
    };
  },
};
</script>

<style>
</style>