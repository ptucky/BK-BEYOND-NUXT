<template>
  <v-container class="grey--text text--darken-2 text-container">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h2 class="page-title">
          <nuxt-link :to="{ path: tagName }" v-text="pageTitle">
          </nuxt-link>
        </h2>
      </v-col>
      
      <v-col cols="12" sm="12" md="5" :style="{'background': '#f2f2f2'}">
        <v-row class="pt-3">
          <v-col class="mx-auto image-card home-head-title">
            <nuxt-link :to="{ path: tagsOne.slug }">
              <img :src="tagsOne.feature_image" class="img-post" :style="{ 'height' : '300px' }">
            </nuxt-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="3" :style="{'background': '#f2f2f2'}">
        <v-row class="pt-4 hotel-cover-box-show">
          <h3 class="home-head-title text-titile-link">
            <nuxt-link :to="{ path: tagsOne.slug }" :style="{'text-decoration': 'none'}">
              {{ tagsOne.title }}
            </nuxt-link>
          </h3>
          <p class="hotel-excerpt text-left" v-if="tagsOne.excerpt" v-text="tagsOne.excerpt.replace(/(<([^>]+)>)|&nbsp;/ig, '').slice(0, 350) + `...`"></p>
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
              <h3 class="home-head-title text-titile-link">
                <nuxt-link :to="{ path: tagsOne.slug }">
                  <img :src="post.feature_image" class="img-post" :style="{ 'height' : '250px' }">
                  {{ post.title }}
                </nuxt-link>
              </h3>
              <p class="pt-2 text-excert" v-if="post.excerpt" v-text="post.excerpt.replace(/(<([^>]+)>)|&nbsp;/ig, '').slice(0, 200) + `...`"></p>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
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
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              // when window width is >= 640px
              801: {
                slidesPerView: 3,
                spaceBetween: 10
              }
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
.hotel-cover-box-show 
{
  .home-head-title{ padding: 5px 10px;}
  .hotel-excerpt{ padding: 5px 10px; font-size: 0.92rem;}
}

@media only screen and (max-width: 800px) {
  .image-card{ width: 95%; }
  img {
      opacity: 1;
  }
}

@media only screen and (min-width: 801px) {
  .image-card{ width: 360px; }
  .swiper-slide{
    transition: transform .2s;
    img {
      opacity: 0.85;
    }
  }
  .swiper-slide:hover{
    transform: scale(1.03);
    img:hover {
      opacity: 1;
    }
  }
}
</style>