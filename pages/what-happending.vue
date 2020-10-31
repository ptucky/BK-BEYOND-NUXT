<template>
  <v-container class="grey--text text--darken-2 text-container">
    <TagsList :pageName="pageName" />
  </v-container>
</template>

<script>
export default {
    components: {
      TagsList: () => import('~/components/TagsList.vue'),
    },
    data() {
      return {
        pageName: "what-happending",
      }
    }
}
</script>