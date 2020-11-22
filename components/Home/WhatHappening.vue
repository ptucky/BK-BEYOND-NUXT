<template>
  <v-container class="grey--text text--darken-2 text-container">
    <v-row>
      <v-col cols="12" sm="12" md="12" class="text-center">
        <h2 class="page-title">
          <nuxt-link :to="{ path: tagName }" v-text="pageTitle"></nuxt-link>
        </h2>
      </v-col>
      <v-col cols="12" sm="12" md="6" v-for="(post, index) in tags" :key="index">
        <div class="text-left box-content">
          <h3 class="home-head-title text-titile-link">
            <nuxt-link :to="{ path: tagName + '/' + post.slug }">
              <img :src="post.feature_image" class="img-post">
              {{ post.title }}
            </nuxt-link>
          </h3>
          <p class="pt-2 text-excert" v-if="post.excerpt" v-text="post.excerpt.replace(/(<([^>]+)>)|&nbsp;/ig, '').slice(0, 200) + `...`"></p>
          <v-spacer>
            <!-- <small class="blue-grey--text text--lighten-2">{{ beautyFullDate(post.updated_at) }}</small> -->
            <!-- <small class="blue-grey--text text--lighten-2" v-text="`by ${post.authors[0].name}`"></small> -->
          </v-spacer>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import { getTags } from '~/api/posts';

export default {
    name: "WHatHappend",
    data() {
        return {
          tagName: 'what-happening',
          pageTitle: "What's happening",
          limitQuery: 6,
          tags: [],
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
  .box-content {
    transition: transform .2s;
    img {
      opacity: 0.9;
    }
  }
  .box-content:hover{
    transform: scale(1.02);
    img:hover {
      opacity: 1;
    }
  }
}
</style>