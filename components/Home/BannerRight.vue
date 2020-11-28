<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" class="text-center">
            <no-ssr>
                <v-flex hidden-sm-and-down class="desktop-ads">
                    <nuxt-link :to="`${linkUrl}`" target="_blank">
                        <img 
                        title="Banner Mobile 300x250"
                        src="~/assets/images/ads/banner-300x250.jpg">
                    </nuxt-link>
                    <nuxt-link :to="`${linkUrl}`" target="_blank">
                        <img 
                        title="Banner Mobile 300x250"
                        src="~/assets/images/ads/banner-300x250.jpg">
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
</template>

<script>
/* eslint-disable */

export default {
    name: "BannerRight",
    data() {
        return {
            linkUrl: '#',
        }
    },
}
</script>

<style lang="scss" scoped>
.desktop-ads {
    border: none;
    a:link, a:visited{ text-decoration: none; }
    text-align: center;
    img {
        width: 300px;
        height: 250px;
    }
}
.mobile-ads {
    border: none;
    a:link, a:visited{ text-decoration: none; }
    text-align: center;
    img {
        width: 300px;
        height: 250px;
    }
}
</style>