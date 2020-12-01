<template>
    <v-row class="row-cover-box" justify="center">
        <v-col cols="12" sm="12" md="12" class="text-center">
            <h2 class="page-title">
                <a href="#">{{ pageTitle }}</a>
            </h2>
        </v-col>
        <v-col cols="12" sm="12" md="6"  v-for="(tag, i) in tags" :key="i">
            <div class="text-left box-content">
            <h3 class="home-head-title text-titile-link">
                <nuxt-link :to="{ path: pageTitle + '/' + tag.tags[0].slug + '/' + tag.slug }">
                <img :src="tag.feature_image" class="img-post">
                {{ tag.title }}
                </nuxt-link>
            </h3>
            <p class="pt-2 text-excert" v-if="tag.excerpt" v-text="tag.excerpt.replace(/(<([^>]+)>)|&nbsp;/ig, '').slice(0, 200) + `...`"></p>
            <v-spacer>
                <!-- <small class="blue-grey--text text--lighten-2">{{ beautyFullDate(tag.updated_at) }}</small> -->
                <!-- <small class="blue-grey--text text--lighten-2" v-text="`by ${tag.authors[0].name}`"></small> -->
            </v-spacer>
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
        beautyFullDate(val) {
            let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let date = new Date(val);
            let fullDate = monthNames[(date.getMonth()+1)] + " " + date.getDate().toString() + ", " + date.getFullYear().toString()
            return fullDate
        },
    }
}
</script>

<style lang="scss" scoped>
    .img-post{
        height: 300px;
    }
</style>