<template>
  <v-container id="portfolio">
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText--text my-0">02 - Portfolio</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <v-row class="mx-0 mb-4 my-0 align-center">
          <p class="code-style darkText--text my-0">02.01 - Work Experience</p>
          <v-divider class="ml-4"></v-divider>
        </v-row>
        <v-tabs
          :vertical="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)"
          background-color="darkLight"
        >
          <v-tab
            class="justify-start"
            v-for="item in experienceList"
            :key="item.id"
          >
            <img
              :src="require('@/' + item.path_to_icon)"
              height="20"
              width="20"
              class="mr-2"
              alt=""
            />
            {{ item.name }}
          </v-tab>

          <v-tab-item v-for="item in experienceList" :key="item.id">
            <v-card flat class="darkLight">
              <v-card-text class="card-text">
                <p>{{ item.position }} @ {{ item.name }}</p>

                <p class="code-style">{{ item.from }} - {{ item.to }}</p>

                <ul class="mb-4">
                  <div v-if="typeof item.description[0] === 'object'">
                    <li
                      v-for="key in Object.keys(item.description[0])"
                      :key="key"
                    >
                      <span class="font-weight-bold">{{
                        item.description[0][key]
                      }}</span>
                      <ul>
                        <li
                          v-for="task in item.description[1][
                            item.description[0][key]
                          ]"
                          :key="task"
                          v-html="task"
                        ></li>
                      </ul>
                    </li>
                  </div>
                  <li
                    v-for="item in item.description"
                    :key="item"
                    v-else
                    v-html="item"
                  ></li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "c-work-experiences",
  data() {
    return {
      experienceList: [],
    };
  },
  created() {
    this.getExperienceList();
  },
  methods: {
    ...mapActions({
      getExperience: "getExperience",
    }),
    getExperienceList() {
      this.getExperience().then((response) => {
        this.experienceList = response;
        this.experienceList.sort(function (a, b) {
          if (a.id < b.id) return 1;
          if (a.id > b.id) return -1;
          return 0;
        });
      });
    },
  },
};
</script>

<style>
.card-text .code-style {
  font-size: 1rem;
}
.card-text p {
  font-size: 16px;
}

@media only screen and (max-width: 786px) {
  .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
    > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
    .v-slide-group__prev {
    display: none !important;
  }
}

.theme--dark.v-tabs-items {
  background-color: #2f3a3e !important;
}
</style>