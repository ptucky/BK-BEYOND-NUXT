<template>
  <v-row class="row-cover-box" justify="center">
    <v-col cols="12" sm="12" md="12" class="text-center">
      <h2>Latest</h2>
    </v-col>
    <v-col cols="12" sm="12" md="4" v-for="(post, index) in posts" :key="index">
      <div class="text-left">
        <img :src="post.feature_image" class="img-post">
        {{ post.authors[0].name }}
        <nuxt-link :to="{ path: post.slug }">
          {{ post.title }}
        </nuxt-link>
        <p v-text="post.excerpt"></p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { getPosts } from '~/api/posts';

export default {
  components: {},
  async asyncData () {
    const posts = await getPosts();
    return { posts: posts }
  }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }
</style>
 