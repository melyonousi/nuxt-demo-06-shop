<template>
  <div class="flex flex-col gap-4">
    <h2 v-text="data.title"></h2>
    <div v-html="data.description" class="flex flex-col gap-2"></div>
  </div>
</template>

<script setup>
const title = "About NuxtJS 3";
const { data } = await useFetch(`/api/about?title=${title}`, {
  method: "POST",
  body: {
    postTitle: "Server API",
  },
});
useHead({
  title: data.value.title,
});
</script>

<style scoped></style>
