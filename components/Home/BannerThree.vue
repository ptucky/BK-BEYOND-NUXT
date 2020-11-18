<template>
    <v-container class="text-container">
        <v-row>
            <v-col cols="12" sm="12" md="12" class="text-center">
                <no-ssr>
                    <v-flex>
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
    name: "BannerThree",
    data() {
        return {
            linkUrl: '#',
        }
    },
}
</script>

<style lang="scss" scoped>

</style>