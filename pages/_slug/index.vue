<template>
  <v-row class="row-cover-box" justify="center">
    <PostDetailView v-if="post" :postData="post" />
    <TagsListView v-if="tags" :tagDatas="tags" />
  </v-row>
</template>

<script>
import { getPostDetail, getTags } from '~/api/posts';

export default {
    components: {
      TagsListView: () => import('~/components/Tags.vue'),
      PostDetailView: () => import('~/components/PostDetail.vue'),
    },
    data() {
      return {
        post: [],
        tags: []
      }
    },
    async asyncData ({params}) {
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
      
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }
</style>
 