<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <div class="text-center">
        <h2>Latest</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image" class="img-post">
            <div class="">
              {{ post.authors[0].name }}
              <nuxt-link :to="{ path: post.slug }">
                {{ post.title }}
              </nuxt-link>
              <p v-text="post.excerpt"></p>
              
            </div>
          </li>
        </ul>
      </div>

    </v-col>
  </v-row>
</template>

<script>
import { getPosts } from '~/api/posts';

export default {
  //scrollToTop: true,
  components: {

  },
  async asyncData () {
    const posts = await getPosts();
    return { posts: posts }
  }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 80%; }
ul li {
  list-style-type:none;
}
</style>
 