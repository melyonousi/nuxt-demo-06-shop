<template>
  <div class="shadow-md p-3 bg-white h-full mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold" v-text="error.statusCode" />
    <p class="mt-7 text-6xl" v-text="'Ooops.'" />
    <p class="mt-7" v-text="error.message" />
    <button @click="handleClearError" class="btn capitalize my-7">go back to home</button>
  </div>
</template>

<script setup>
defineProps(["error"]);
// console.log(error);
const handleClearError = () => clearError({ redirect: "/" });
</script>
