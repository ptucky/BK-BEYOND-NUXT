<template>
  <v-row class="row-cover-box" justify="center">
    <TagsList :pageName="pageName" />
  </v-row>
</template>

<script>

export default {
    components: {
      TagsList: () => import('~/components/TagsList.vue'),
    },
    data() {
      return {
        pageName: "properties",
      }
    }
}
</script>
 