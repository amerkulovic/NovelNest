<script setup>
const props = defineProps(["message"]);
</script>
<template>
  <div class="bg-orange-200 h-[550px] flex items-center justify-center">
    <h1 class="text-5xl font-extralight mb-10">{{ message }}</h1>
  </div>
</template>
