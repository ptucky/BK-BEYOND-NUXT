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
          <div class="swiper-slide-img" :style="{ 'width': '100%', 'background-image' : `url(${latest.feature_image})` }">
            <v-chip
              color="red"
              text-color="white"
              label
              small
            >
              <v-icon left>
                mdi-fire
              </v-icon>
              new
            </v-chip>
            <h1 class="text-slide" v-text="latest.title"></h1>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    
    <v-container class="grey--text text--darken-2 text-container">
      <v-row>
        <v-col cols="12" sm="12" md="12" class="text-center">
          <h2>What’s happening</h2>
        </v-col>
        <v-col cols="12" sm="12" md="4" v-for="(post, index) in posts" :key="index">
          <div class="text-left">
            <img :src="post.feature_image" class="img-post">
            <nuxt-link :to="{ path: post.slug }">
              {{ post.title }}
            </nuxt-link>
            <v-spacer>
              <small class="blue-grey--text text--lighten-2">{{ beautyFullDate(post.updated_at) }}</small>
            </v-spacer>
            <p v-text="post.excerpt"></p>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </v-row>
</template>

<script>
import { getPosts } from '~/api/posts';
import { getTags } from '~/api/posts';

export default {
  components: {},
  data () {
    return {
      swiperOption: {
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
    const posts = await getPosts();

    return { 
            posts: posts, 
            latestPosts: latestPosts 
          }
  },
  methods: {
    // latestPost(){
    //   const posts = await getPosts();
    //   return { posts: posts }
    // },
    beautyFullDate(val) {
      let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let date = new Date(val);
      let fullDate = monthNames[(date.getMonth()+1)] + " " + date.getDate().toString() + ", " + date.getFullYear().toString()
      return fullDate
    },
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
.img-post{ width: 100%; }

@media only screen and (max-width: 800px) {
  .swiper, .swiper-slide-img {
    height: 400px;
  }
  .home-slide-image{ 
    margin-top: 0px;
    .text-slide { font-size: 1.2rem; font-weight: 300; } 
  }
}

@media only screen and (min-width: 801px) {
  .swiper, .swiper-slide-img {
    height: 580px;
  }
  .home-slide-image{ 
    margin-top: -10px;
    .text-slide { font-size: 2rem; font-weight: 300; } 
  }
}
.swiper-slide-img {
  background-repeat: no-repeat!important;
  background-size: cover!important;
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
 