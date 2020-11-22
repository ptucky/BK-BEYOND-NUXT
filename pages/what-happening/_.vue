<template>
  <PostDetailView v-if="post" :postData="post" />
</template>

<script>
import { getPostDetail, getTags } from '~/api/posts';

export default {
    components: {
      PostDetailView: () => import('~/components/PostDetail.vue'),
    },
    data() {
      return {
        post: [],
        tags: []
      }
    },
    async asyncData ({params}) {    
      // call component for single post 
      //const post = await getPostDetail(params.slug)
      const post = await getPostDetail(params.pathMatch)
      return { post: post }
    
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }
</style>
 