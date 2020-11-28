<template>
  <v-row class="row-cover-box" justify="center">
    <div
      class="swiper home-slide-image"
      v-swiper:myDirectiveSwiper="swiperOption"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(latest, i) in latestPosts" :key="i">
          <div class="swiper-slide-img" :style="{'width': '100%', 'background-image' : `url(${latest.feature_image})` }">
            <div class="text-slide white--text" v-if="latest.title">
              <nuxt-link :to="{ path: latest.primary_tag.slug + '/' + latest.slug }">
                <v-chip
                  color="red"
                  text-color="white"
                  label
                  small
                  style="margin-top: -3px;"
                >
                  {{ latest.primary_tag.name }}
                </v-chip>
                {{ latest.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev hidden-lg-and-up" slot="button-prev"></div>
      <div class="swiper-button-next hidden-lg-and-up" slot="button-next"></div>
    </div>

    <v-container style="margin-top: -10px;">
      <WhatHappening />
      <BannerOne />
      <Cuisine />
      <People />
      <Hotel />
      <BannerFour />
    </v-container>
  </v-row>
</template>

<script>
import { getPosts } from '~/api/posts';

export default {
  components: {
    WhatHappening: () => import('~/components/Home/WhatHappening.vue'),
    BannerOne: () => import('~/components/Home/BannerOne.vue'),
    Cuisine: () => import('~/components/Home/Cuisine.vue'),
    People: () => import('~/components/Home/People.vue'),
    Hotel: () => import('~/components/Home/Hotel.vue'),
    BannerFour: () => import('~/components/Home/BannerFour.vue'),
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3500,
          disableOnInteraction: true
        },
        //centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 5,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },      
    }
  },
  // mounted() {
  //   this.latestPost()
  // },
  async asyncData () {
    const latestPosts = await getPosts(6);
    return { 
      latestPosts: latestPosts 
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 800px) {
  .row-cover-box{ 
    margin-top: -57px; 
    .swiper-slide-img { opacity: 1; }
  }
  .swiper, .swiper-slide-img { height: 380px; }
  .home-slide-image{ 
    margin-top: 0px;
    .text-slide {
      padding: 0; margin: 0 15px; margin-top: 260px; line-height: 0.63;
      a:link, a:visited { color: #FFF; font-size: 1.1rem; font-weight: 500; background-color:rgb(0,0,0, 0.4); text-decoration: none; padding: 5px 10px;} 
      a:hover { color: #FFF; background-color:rgb(0,0,0, 0.9);}
    }
  }
}

@media only screen and (min-width: 801px) {
  .row-cover-box{ 
    margin-top: -82px; 
    .swiper-slide-img { opacity: 0.95; }
  }
  .swiper, .swiper-slide-img { height: 80vh; }
  .home-slide-image{ 
    margin-top: 0px;
     .text-slide {
      padding: 0; margin: 0 50px; margin-top: 60vh; line-height: 1.39; 
      a:link, a:visited { color: #FFF; font-size: 2.2rem; font-weight: 500; background-color:rgb(0,0,0, 0.4); text-decoration: none; padding: 5px 10px;}
      a:hover { color: #FFF; background-color:rgb(0,0,0, 0.9);} 
    }
  }
}

.img-post{ width: 100%; }
.swiper-slide-img {
  background-repeat: no-repeat!important;
  background-size: cover!important;
  background-position: 50%!important;
}
.chip-bg{ background-color: #aa6a6a; }
.swiper {
  width: 100%;
  z-index: 0;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    // background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>