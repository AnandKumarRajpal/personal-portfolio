<template>
  <v-container>
    <v-row class="main-container">
      <v-col class="px-0 py-0">
        <p class="code-style">02 - Work Experience</p>
        <v-tabs :vertical="!($vuetify.breakpoint.xs || $vuetify.breakpoint.sm)">
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
            <v-card flat>
              <v-card-text class="card-text">
                <p>{{ item.position }} @ {{ item.name }}</p>

                <p class="code-style">{{ item.from }} - {{ item.to }}</p>

                <ul class="mb-4">
                  <div  v-if="typeof(item.description[0]) === 'object'">
                    <li v-for="key in Object.keys(item.description[0])" :key="key">
                      <span class="font-weight-bold">{{ item.description[0][key] }}</span>
                      <ul>
                        <li v-for="task in item.description[1][item.description[0][key]]" :key="task" v-html="task">
                        </li>
                      </ul>
                    </li>
                  </div>
                  <li v-for="item in item.description" :key="item" v-else v-html="item">
                  </li>
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
</style>