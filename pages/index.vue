<template>
  <v-row class="row-cover-box" justify="center">
    <v-col cols="12" sm="12" md="12" class="text-center">
      <h2>Latest</h2>
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

    
      <!-- <swiper
        ref="carousel"
        class="swiper"
        :options="swiperOptions"
        @ready="onSwiperRedied"
        @clickSlide="onSwiperClickSlide"
        @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->


    <div v-swiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          Render original HTML in server, render Swiper in browser (client)
        </div>
      </div>
    </div>


  </v-row>
</template>

<script>
import { getPosts } from '~/api/posts';

export default {
  components: {},
  data () {
    return {
      swiperOption: {
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }

    }
  },
  async asyncData () {
    const posts = await getPosts();
    return { posts: posts }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }



.swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
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
 