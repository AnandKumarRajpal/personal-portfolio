<template>
  <v-container id="education">
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText--text my-0">02.02 - Education</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <v-tabs
          :vertical="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
          background-color="darkLight"
        >
          <v-tab class="justify-start">
            <img src="@/assets/hu.png" height="20" class="mr-2" alt="" />
            Habib University
          </v-tab>
          <v-tab class="justify-start">
            <img src="@/assets/dj.png" height="20" class="mr-2" alt="" />
            D.J. Sindh Govt. Science College
          </v-tab>
          <v-tab class="justify-start">
            <img src="@/assets/stpats.png" height="20" class="mr-2" alt="" />
            St. Patrick's High School
          </v-tab>

          <v-tab-item>
            <v-card flat class="darkLight">
              <v-card-text class="card-text">
                <p>Bachelors of Science in Computer Science</p>
                <p class="code-style">2018 - 2022</p>
                <p>Karachi, Pakistan</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="darkLight">
              <v-card-text class="card-text">
                <p>Intermediate, Pre-engineering</p>
                <p class="code-style">2016 - 2018</p>
                <p>Karachi, Pakistan</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="darkLight">
              <v-card-text class="card-text">
                <p>Matriculation</p>
                <p class="code-style">2006 - 2016</p>
                <p>Karachi, Pakistan</p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "c-education",
};
</script>

<style>
.theme--dark.v-tabs-items {
  background-color: #2f3a3e !important;
}
</style>