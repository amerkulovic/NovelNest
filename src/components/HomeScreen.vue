<script setup>
import photo from "../assets/book-photo.jpg";
</script>

<template>
  <div class="flex justify-around items-center bg-orange-200 pt-5 pb-10">
    <div class="relative">
      <div class="bg-amber-900 w-[450px] h-[550px] absolute top-5 right-5 z-10"></div>
      <img :src="photo" class="relative w-[450px] h-[550px] z-20 border-4 border-amber-900 shadow-lg shadow-amber-700" />
    </div>
    <section class="w-[500px] text-3xl flex flex-col items-end">
      <p class="italic font-extralight pb-4">"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</p>
      <span class="font-bold mr-5">- Dr.Seuss</span>
    </section>
  </div>
</template>
