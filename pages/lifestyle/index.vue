<template>
  <v-container class="grey--text text--darken-2 text-container">
    <TagsListMain :pageName="pageName" :childTag="childTag" />
  </v-container>
</template>

<script>
export default {
    components: {
      TagsListMain: () => import('~/components/TagsListMain.vue'),
    },
    data() {
      return {
        pageName: "lifestyle",
        childTag: ["cuisine","people","shopping","travel"]
      }
    }
}
</script>
 