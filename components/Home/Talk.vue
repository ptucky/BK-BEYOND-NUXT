<template>
  <v-container class="grey--text text--darken-2 text-container">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h2 class="page-title">
          <nuxt-link :to="{ path: tagName }" v-text="pageTitle"></nuxt-link>
        </h2>
      </v-col>
      <v-col cols="12" sm="12" md="8">
        <v-row>
          <v-card
            class="mx-auto image-card mb-4"
            v-for="(post, index) in tags" :key="index"
          >
            <h3 class="home-head-title text-titile-link">
              <nuxt-link :to="{ path: post.slug }">
                <img :src="post.feature_image" class="img-post" :style="{ 'height': '220px'}">
                <div class="pl-2 pr-2">{{ post.title }}</div>
              </nuxt-link>
            </h3>
            <v-card-text v-if="post.excerpt" v-text="post.excerpt.replace(/(<([^>]+)>)|&nbsp;/ig, '').slice(0, 250) + `...`"></v-card-text>
          </v-card>
        </v-row>
        <v-spacer />
        <div class="pt-5 text-center view-all">
          <nuxt-link :to="{ path: tagName }">
            <v-btn
              rounded
              color="red"
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
      BannerThree: () => import('~/components/Home/BannerThree.vue'),
    },
    data() {
        return {
            limitQuery: 4,
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
@media only screen and (max-width: 800px) 
{
  .image-card{ width: 95%; }
  img {
    opacity: 1;
  }
}
@media only screen and (min-width: 801px) 
{
  .image-card{ width: 360px; }
  img {
    opacity: 0.85;
  }
  img:hover {
    opacity: 1;
  }
}
</style>