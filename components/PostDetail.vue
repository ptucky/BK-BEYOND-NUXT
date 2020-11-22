<template>
     <div> 
        <div class="post-header-box text-center mt-3 mb-5">
            <v-chip
                color="brown lighten-1"
                text-color="white"
                label
                small
                v-if="data.primary_tag.name"
                :style="{ 'font-weight': '600','font-size':'11px', 'height': '22px', 'margin-bottom':'10px'}"
            >
                {{ data.primary_tag.name }}
            </v-chip>
                <h2 v-if="data.title" class="post-title text-center pl-1 pr-1">
                    <nuxt-link :to="{ path: data.slug }">
                        {{ data.title }}
                    </nuxt-link>
                </h2>
        </div>
        <div v-if="data.feature_image" class="bgImgHeader" :style="{'background-image' : `url(${data.feature_image})`}"></div>

        <!-- <v-parallax
            class="parallax-img"
            height="400"
            width="100%"
            :src="`${data.feature_image}`"
        ></v-parallax> -->
        
        <v-container class="grey--text text--darken-2 text-container">
            <v-row class="row-cover-box" justify="center">
                <v-col v-if="data" cols="12" lg="10" md="10">
                    <div class="text-left">
                        <div class="text-excert" v-if="data.html" v-html="data.html"></div>
                    </div>
                </v-col>
            </v-row>
        </v-container> 
    </div>
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

<style lang="scss" scoped>

@media only screen and (max-width: 800px) {
.post-header-box {
    .post-title{ line-height: 1.2; }
}
.bgImgHeader{
    width: 100%; height: 270px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-repeat: no-repeat!important;
    background-size: cover!important;
    background-position: 50%!important;
}
}
@media only screen and (min-width: 801px) {
.bgImgHeader{
    width: 100%; height: 500px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-repeat: no-repeat!important;
    background-size: cover!important;
    background-position: 50%!important;
}
}
</style>