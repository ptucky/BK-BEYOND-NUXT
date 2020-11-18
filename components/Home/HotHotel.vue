<template>
  <v-container class="grey--text text--darken-2 text-container">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h2 class="page-title" v-text="pageTitle"></h2>
      </v-col>
      <v-col cols="12" sm="12" md="5">
        <v-row>
          <v-col class="mx-auto image-card">
            <nuxt-link :to="{ path: tagsOne.slug }">
              <img :src="tagsOne.feature_image" class="img-post" :style="{ 'height' : '300px' }">
            </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <v-row class="pt-3">
          <nuxt-link :to="{ path: tagsOne.slug }">
            <div v-text="tagsOne.title"></div>
          </nuxt-link>
          <p v-if="tagsOne.excerpt" v-text="tagsOne.excerpt"></p>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="4" class="text-center">
        <BannerThree />
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mx-auto image-card">
        <div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(post, index) in tags.slice(1, 6)" :key="index">
              <nuxt-link :to="{ path: post.slug }">
                <img :src="post.feature_image" class="img-post" :style="{ 'height' : '250px' }">
                <div>
                  {{ post.title }}
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </v-col> 
    </v-row>
    
  </v-container>
</template>

<script>
/* eslint-disable */
import { getTags } from '~/api/posts';

export default {
    name: "HotHotel",
    components: {
      BannerThree: () => import('~/components/Home/BannerThree.vue'),
    },
    data() {
        return {
          swiperOption: {
            autoplay: {
              delay: 3500,
              disableOnInteraction: true
            },
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          },
          limitQuery: 6,
          tagName: 'hotel',
          pageTitle: "Hot Hotels",
          tags: [],
          tagsOne: []
        }
    },
    mounted() {
        this.asyncData(this.tagName, this.limitQuery)
    },
    methods: {
      async asyncData (key, limit) {
          const tag = await getTags(key, limit)
          this.tags = tag
          this.tagsOne = tag[0]
    
      }
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