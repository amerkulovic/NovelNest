<script setup>
import photo from "../assets/book-photo.jpg";
</script>

<template>
  <div class="flex justify-around items-center bg-orange-200 pb-10">
    <img :src="photo" class="w-[550px] h-[550px]" />
    <section class="w-[500px] text-3xl flex flex-col items-end">
      <p class="italic font-extralight pb-4">"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</p>
      <span class="font-bold mr-5">- Dr.Seuss</span>
    </section>
  </div>
</template>
