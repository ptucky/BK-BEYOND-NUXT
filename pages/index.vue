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
          <div class="swiper-slide-img" :style="{ 'opacity': '0.9','width': '100%', 'background-image' : `url(${latest.feature_image})` }">
            <v-chip
              color="red"
              text-color="white"
              label
              small
            >
              {{ latest.primary_tag.name }}
            </v-chip>
            <h1 class="text-slide white--text" v-text="latest.title"></h1>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </div>
    
    <WhatHappend />
    <BannerOne />
    <LifeStyle />

  </v-row>
</template>

<script>
import { getPosts } from '~/api/posts';

export default {
  components: {
    WhatHappend: () => import('~/components/Home/WhatHappend.vue'),
    BannerOne: () => import('~/components/Home/BannerOne.vue'),
    LifeStyle: () => import('~/components/Home/LifeStyle.vue'),
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        spaceBetween: 30,
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
  .swiper, .swiper-slide-img {
    height: 350px;
  }
  .home-slide-image{ 
    margin-top: 0px;
    .text-slide { font-size: 1.2rem; font-weight: 300; } 
  }
}

@media only screen and (min-width: 801px) {
  .swiper, .swiper-slide-img {
    height: 82vh;
  }
  .home-slide-image{ 
    margin-top: 0px;
    .text-slide { font-size: 2rem; font-weight: 300; } 
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