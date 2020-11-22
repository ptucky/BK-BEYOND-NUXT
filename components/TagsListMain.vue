<template>
    <v-row class="row-cover-box" justify="center">
        <v-col cols="12" sm="8" md="12">
            <div v-for="(tag, i) in tags" :key="i">
                <nuxt-link  :to="{ path: pageTitle + '/' + tag.slug }">
                    <h1 v-if="tag.title" v-text="tag.title" class="text-center"></h1>
                </nuxt-link>
                <div class="text-justify pt-3">
                    <div v-if="tag.excerpt" v-html="tag.excerpt"></div>
                </div>
            </div>
        </v-col>
    </v-row>
</template>

<script>
/* eslint-disable */
import { getTagsMain } from '~/api/posts';

export default {
    name: "TagsListMain",
    props: ["pageName","childTag"],
    data() {
         return {
            pageTitle: this.pageName,
            tags: [],
        }
    },
    mounted() {
        this.asyncData(this.childTag)
        //console.log(this.$route.fullPath);
    },
    methods: {
        async asyncData (childTag) {
          const tag = await getTagsMain(childTag)
          this.tags = tag
        },
    }
}
</script>

<style lang="scss" scoped>

</style>