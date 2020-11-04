<template>
  <v-container class="grey--text text--darken-2 text-container">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h2 class="page-title" v-text="pageTitle"></h2>
      </v-col>

      <v-col cols="12" sm="12" md="8">
        <v-row>
          <v-card
            class="mx-auto image-card"
            v-for="(post, index) in tags" :key="index"
          >
            <nuxt-link :to="{ path: post.slug }">
              <img :src="post.feature_image" class="img-post">
              <v-card-title>
                {{ post.title }}
              </v-card-title>
            </nuxt-link>
            <v-card-subtitle>
              <v-icon
                medium
                color="red"
                class="pl-1"
              >
                mdi-clock
              </v-icon> 2-3 minutes read
            </v-card-subtitle>
            <v-expand-transition>
              <div>
                <v-divider></v-divider>
                <v-card-text v-if="post.excerpt" v-text="post.excerpt"></v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-row>
        <v-spacer />
        <div class="pt-5 text-center">
          <nuxt-link :to="{ path: tagName }">
            <v-btn
              rounded
              color="primary"
              dark
            >
              View all {{ pageTitle }}
            </v-btn>
          </nuxt-link>
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="4" class="text-center">
        <BannerTwo />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import { getTags } from '~/api/posts';

export default {
    name: "Talk",
    components: {
      BannerTwo: () => import('~/components/Home/BannerTwo.vue'),
    },
    data() {
        return {
            limitQuery: 2,
            tagName: 'talk',
            pageTitle: "Talk",
            tags: [],
        }
    },
    mounted() {
        this.asyncData(this.tagName, this.limitQuery)
    },
    methods: {
        async asyncData (key, limit) {
            const tag = await getTags(key, limit)
            this.tags = tag
        },
    }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }
@media only screen and (max-width: 800px) {
  .image-card{ width: 95%; }
}
@media only screen and (min-width: 801px) {
  .image-card{ width: 360px; }
}
</style>