<template>
  <TagsList :pageName="pageName" />
</template>

<script>
export default {
    components: {
      TagsList: () => import('~/components/TagsList.vue'),
    },
    data() {
      return {
        pageName: "lifestyle",
      }
    }
}
</script>
 