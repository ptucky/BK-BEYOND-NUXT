<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

    <img :src="post.feature_image" class="img-post">
    <h1 v-if="post.title" v-text="post.title" class="text-center"></h1>
    <div class="text-justify">
        <div v-if="post.html" v-html="post.html"></div>
    </div>

    </v-col>
  </v-row>
</template>

<script>
import { getSinglePost } from '~/api/posts';

export default {
    //scrollToTop: true,
    components: {

    },
    async asyncData ({params}) {
        const post = await getSinglePost(params.slug);
        return { post: post }
    }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }
</style>
 