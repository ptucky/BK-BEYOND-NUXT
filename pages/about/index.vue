<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
    <img :src="page.feature_image" class="img-post">
    <h1 v-if="page.title" v-text="page.title" class="text-center"></h1>
    <div class="text-justify">
        <div v-if="page.html" v-html="page.html"></div>
    </div>

    </v-col>
  </v-row>
</template>

<script>
import { getPage } from '~/api/posts';

export default {
  components: {

  },
  async asyncData () {
    const page = await getPage('about');
    return { page: page }
  }
}
</script>

<style lang="scss" scoped>
.img-post{ width: 100%; }
</style>
 