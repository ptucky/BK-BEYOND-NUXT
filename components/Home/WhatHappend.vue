<template>

    <v-row class="row-cover-box" justify="center">
        <v-col cols="12" sm="8" md="12">
            HOOOOO
            <div v-for="(tag, i) in tags" :key="i">
                <nuxt-link  :to="{ path: tag.slug }">
                    <h1 v-if="tag.title" v-text="tag.title" class="text-center"></h1>
                </nuxt-link>
                <div class="text-justify pt-3">
                    <div v-if="tag.excerpt" v-html="tag.excerpt"></div>
                </div>
            </div>
            YYYYYYYY
        </v-col>
    </v-row>

    <!-- <v-container class="grey--text text--darken-2 text-container">
      <v-row>
        <v-col cols="12" sm="12" md="12" class="text-center">
          <h2>What’s happening</h2>
        </v-col>
        <v-col cols="12" sm="12" md="4" v-for="(post, index) in tags" :key="index">
          <div class="text-left">
            <img :src="post.feature_image" class="img-post">
            <nuxt-link :to="{ path: post.slug }">
              {{ post.title }}
            </nuxt-link>
            <v-spacer>
              <small class="blue-grey--text text--lighten-2">{{ beautyFullDate(post.updated_at) }}</small>
            </v-spacer>
            <p v-text="post.excerpt"></p>
          </div>
        </v-col>
      </v-row>
    </v-container> -->

</template>

<script>
/* eslint-disable */
import { getTags } from '~/api/posts';

export default {
    name: "WHatHappend",
    data() {
        return {
            limitQuery: 6,
            tagName: 'what-happend',
            pageTitle: this.pageName,
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


console.log(key + "::" +limit)

            this.tags = tag
        },
    }
}
</script>

<style lang="scss" scoped>

</style>