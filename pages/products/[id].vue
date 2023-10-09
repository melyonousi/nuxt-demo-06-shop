<template>
  <div>
    <ProductDetails :product="product" />
    <Head>
      <Title>Shop | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
      <Meta name="keywords" :content="product.category" />
      <!-- <Style type="text/css" children="body { background-color: green; }" /> -->
    </Head>
  </div>
</template>

<script setup>
const { fakeStoreApi } = useRuntimeConfig();
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});

// useHead({
//   title: product.value.title,
//   meta: [
//     { name: "description", content: product.value.description },
//     { name: "keywords", content: product.value.category },
//   ],
// });
</script>
<style scoped></style>
