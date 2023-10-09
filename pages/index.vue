<template>
  <div>
    <h2>home</h2>
    <p>{{ data }}</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis magni
      natus nostrum enim? Nobis voluptas, est dolorem laboriosam repellat amet
      exercitationem harum alias similique, totam itaque.
    </p>
    <p>
      Ratione cum earum impedit iusto error? Iste mollitia repudiandae quam inventore?
      Quos omnis consectetur totam tenetur asperiores voluptatem, deserunt praesentium
      alias quod ut?
    </p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/MAD");

useHead({
  title: "Home Page",
});
</script>

<style scoped>
h2 {
  font-size: clamp(24px, 10vw, 48px);
}
</style>
