<template>
    <v-col  cols="12" sm="8" md="12">
        <div v-for="(tag, i) in tags" :key="i" class="pt-6">
            <nuxt-link  :to="{ path: tag.slug }">
                <h1 v-if="tag.title" v-text="tag.title" class="text-center"></h1>
            </nuxt-link>
            <div class="text-justify pt-3">
                <div v-if="tag.excerpt" v-html="tag.excerpt"></div>
            </div>
        </div>
    </v-col>
</template>

<script>
/* eslint-disable */
import { getTags } from '~/api/posts';

export default {
    name: "TagsList",
    props: ["pageName"],
    data() {
         return {
            pageTitle: this.pageName,
            tags: [],
        }
    },
    mounted() {
        this.asyncData(this.pageName)
        //console.log(this.$route.fullPath);
    },
    methods: {
        async asyncData (pageName) {
          const tag = await getTags(pageName)
          this.tags = tag
        },
    }
}
</script>