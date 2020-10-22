<template>
    <v-col v-if="data" cols="12" sm="8" md="12">
        <img v-if="data.feature_image" :src="data.feature_image" class="img-post">
        <nuxt-link :to="{ path: data.slug }">
            <h1 v-if="data.title" v-text="data.title" class="text-center"></h1>
        </nuxt-link>
        <div class="text-justify">
            <div v-if="data.html" v-html="data.html"></div>
        </div>
    </v-col>
</template>

<script>
/* eslint-disable */
export default {
    name: "PostDetailView",
    props: ["postData"],
    data() {
        return {
            data: this.postData
        }
    },
    mounted() {
     
    }
}
</script>