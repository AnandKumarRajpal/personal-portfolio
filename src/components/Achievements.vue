<template>
  <v-container id="achievements">
    <v-row class="main-container align-center justify-center">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText--text my-0">02.04 - Achievements</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <v-slide-group multiple show-arrows>
          <v-slide-item>
            <v-card
              width="350"
              elevation="5"
              class="my-4 mx-2 rounded-lg darkLight"
              rounded
            >
              <div class="d-flex align-center justify-center">
                <img
                  src="@/assets/award.svg"
                  height="100"
                  alt=""
                  class="my-8"
                  :style="$vuetify.theme.dark ? '' : 'filter: invert(1);'"
                />
              </div>
              <v-card-title style="word-break: break-word"
                >SAATHI: An Urdu Virtual Assistant for Elderly Aging in
                Place</v-card-title
              >
              <v-card-text>
                <p>
                  19th International Conference On Smart Living and Public
                  Health
                </p>
                <p>Published in Springer</p>
              </v-card-text>
            </v-card>
          </v-slide-item>
          <v-slide-item>
            <v-card
              width="350"
              elevation="5"
              class="my-4 mx-2 rounded-lg d-flex flex-column darkLight"
              rounded
            >
              <div class="d-flex align-center justify-center">
                <img
                  src="@/assets/top50-badge.svg"
                  height="100"
                  alt=""
                  class="my-8"
                />
              </div>
              <v-card-title style="word-break: break-word"
                >Top 50 Solutions</v-card-title
              >
              <v-card-text
                style="flex: 1 1 auto"
                class="d-flex flex-column justify-space-between"
              >
                <p>Google Solution Challenge 2022</p>
                <p>Link</p>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card
              width="350"
              elevation="5"
              class="my-4 mx-2 rounded-lg d-flex flex-column darkLight"
              rounded
            >
              <div class="d-flex align-center justify-center">
                <img
                  src="@/assets/scholar.svg"
                  height="100"
                  alt=""
                  class="my-8"
                  :style="$vuetify.theme.dark ? '' : 'filter: invert(1);'"
                />
              </div>
              <v-card-title style="word-break: break-word"
                >Dean's Honors List</v-card-title
              >
              <v-card-text
                style="flex: 1 1 auto"
                class="d-flex flex-column justify-space-between"
              >
                <p>Fall Semester 2021</p>
                <p>Habib University</p>
              </v-card-text>
            </v-card>
          </v-slide-item>

          <v-slide-item>
            <v-card
              width="350"
              elevation="5"
              class="my-4 mx-2 rounded-lg d-flex flex-column darkLight"
              rounded
            >
              <div class="d-flex align-center justify-center">
                <img
                  src="@/assets/scholar.svg"
                  height="100"
                  alt=""
                  class="my-8"
                  :style="$vuetify.theme.dark ? '' : 'filter: invert(1);'"
                />
              </div>
              <v-card-title style="word-break: break-word"
                >100% Merit Scholarship</v-card-title
              >
              <v-card-text
                style="flex: 1 1 auto"
                class="d-flex flex-column justify-space-between"
              >
                <p>Undergraduate Studies</p>
                <p>Habib University</p>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "c-achievements",
};
</script>

<style>
</style>