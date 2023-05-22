<template>
  <v-footer padless elevation="5" style="margin-top: 5rem" class="navbar-bg">
    <v-card flat tile class="text-center" width="100%" style="background-color: transparent;">
      <v-divider></v-divider>
      <v-card-text>
        Copyright &copy; {{ new Date().getFullYear() }} — Anand Kumar
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "c-footer",
};
</script>

<style>
</style>