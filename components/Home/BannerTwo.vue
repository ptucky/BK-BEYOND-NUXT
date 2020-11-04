<template>
    <v-container class="text-container">
        <v-row>
            <v-col cols="12" sm="12" md="12" class="text-center">
                <no-ssr>
                    <v-flex hidden-sm-and-down class="desktop-ads">
                        <nuxt-link :to="`${linkUrl}`" target="_blank">
                            <img 
                            title="Banner Desktop 300x600"
                            src="~/assets/images/ads/banner-300x600.jpg">
                        </nuxt-link>
                    </v-flex>
                    <v-flex hidden-md-and-up class="mobile-ads">
                        <nuxt-link :to="`${linkUrl}`" target="_blank">
                            <img 
                            title="Banner Mobile 300x250"
                            src="~/assets/images/ads/banner-300x250.jpg">
                        </nuxt-link>
                    </v-flex>
                </no-ssr>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable */

export default {
    name: "BannerTwo",
    data() {
        return {
            linkUrl: '#',
        }
    },
}
</script>

<style lang="scss" scoped>
.desktop-ads {
    margin-top: -25px;
    a:link, a:visited{ text-decoration: none; }
    text-align: center;
    img {
        width: 300px;
        height: 600px;
    }
}
.mobile-ads {
    a:link, a:visited{ text-decoration: none; }
    text-align: center;
    img {
        width: 1005;
        height: 250px;
    }
}
</style>