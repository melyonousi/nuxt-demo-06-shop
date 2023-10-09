<template>
  <div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { fakeStoreApi } = useRuntimeConfig();
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "this is a products page " + products.value.length + " items..",
});
</script>

<style scoped></style>
