<template>
  <v-container class="grey--text text--darken-2 text-container">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h2 class="page-title">
           <nuxt-link :to="{ path: tagPathName }" v-text="pageTitle"></nuxt-link>
        </h2>
      </v-col>
      <v-col>
        <div v-swiper="swiperOption">
          <div class="swiper-wrapper">
            <div cols="12" sm="12" md="4" class="swiper-slide" v-for="(post, index) in tags" :key="index">
              <h3 class="home-head-title text-titile-link">
                <nuxt-link :to="{ path: tagPathName + '/' + post.slug }">
                  <img :src="post.feature_image" class="img-post" :style="{ 'height' : '230px' }">
                  {{ post.title }}
                </nuxt-link>
              </h3>
              <p class="pt-2 text-excert" v-if="post.excerpt" v-text="post.excerpt.replace(/(<([^>]+)>)|&nbsp;/ig, '').slice(0, 150) + `...`"></p>
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
    name: "Shopping",
    data() {
        return {
          pageTitle: 'Shopping',
          tagName: 'shopping',
          tagPathName: 'lifestyle/shopping',
          limitQuery: 6,
          tags: [],
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
        }
    },
    mounted() {
        this.asyncData(this.tagName, this.limitQuery)
    },
    methods: {
        beautyFullDate(val) {
            let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let date = new Date(val);
            let fullDate = monthNames[(date.getMonth()+1)] + " " + date.getDate().toString() + ", " + date.getFullYear().toString()
            return fullDate
        },
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
  img {
    opacity: 1;
  }
}
@media only screen and (min-width: 801px) 
{
  .swiper-slide {
    transition: transform .2s;
    img {
      opacity: 0.9;
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