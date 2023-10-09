<template>
  <div
    class="shadow-md p-3 bg-white h-full hover:scale-[1.06] transition-transform duration-500 ease-in-out text-center group cursor-pointer"
  >
    <NuxtLink :to="`/products/${product.id}`">
      <img
        :src="product.image"
        :alt="product.title"
        class="max-h-[120px] max-w-[70%] my-0 mx-auto md:grayscale-[100] group-hover:grayscale-0 transition-all duration-200 ease-in-out"
      />
      <p v-text="product.title" class="font-bold text-gray-500 m-4 truncate" />
    </NuxtLink>
  </div>
</template>
<script setup>
const { product } = defineProps(["product"]);
</script>
