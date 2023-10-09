<template>
  <div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
      <div class="p-7">
        <img
          :src="product.image"
          :alt="product.title"
          class="max-h-[400px] mx-auto my-7"
        />
      </div>
      <div class="p-7">
        <h1 v-text="product.title" class="text-4xl my-7"></h1>
        <p class="text-xl my-7" v-text="`Price - $ ${product.price}`"></p>
        <h2 class="font-bold border-b-2 mb-4 pb-2" v-text="'Product Description: '"></h2>
        <p v-text="product.description" class="mb-7"></p>
        <button class="btn flex justify-between items-center gap-4">
          <Icon name="mdi:shopping" />
          <span v-text="'Add to Cart'"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const { product } = defineProps(["product"]);
</script>
