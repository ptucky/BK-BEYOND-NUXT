<template>
  <v-container class="grey--text text--darken-2 text-container">
    <v-row class="row-cover-box" justify="center">
      ++ _slug/index ++
      <PostDetailView v-if="post" :postData="post" />
    </v-row>
  </v-container>
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
      const post = await getPostDetail(params.slug)
      return { post: post }
      
      /*
      if(params.slug === "what-happending" ||
        params.slug === "cuisine" || 
        params.slug === "hotel" ||
        params.slug === "lifestyle" ||
        params.slug === "talk" ||
        params.slug === "properties"
      )
      {

        // call component for tag 
        const tags = await getTags(params.slug)
        return { tags: tags }

      } else {

        // call component for single post 
        const post = await getPostDetail(params.slug)
        return { post: post }

      }
      */
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }
</style>
 