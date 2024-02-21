<script setup>
import oldBooks from "../assets/old-books.jpg";
</script>
<template>
  <div class="bg-orange-200 flex flex-row justify-around py-20 mb-20 max-sm:pt-0 max-sm:justify-center">
    <section class="h-96 max-lg:h-full flex flex-col w-1/2 ml-10 pt-20 max-sm:ml-0 max-sm:w-3/4 transition-all duration-500 ease-in-out">
      <h1 class="text-6xl font-extrabold mb-5 max-sm:text-center">About Us</h1>
      <p class="font-extralight text-xl">
        Welcome to NovelNest, a haven for book lovers seeking their next literary adventure. At NovelNest, we pride ourselves on offering a personalized reading experience. Our advanced algorithms provide tailored book recommendations based on your unique preferences, ensuring you discover stories that resonate with you. Explore our curated collections, engage in vibrant community discussions, and connect with fellow readers who share your passion. NovelNest isn't just a platform; it's a
        community celebrating the love of reading. Dive into the world of books with us, where every page brings a new story to life. Join NovelNest and let the journey unfold!
      </p>
    </section>
    <div class="relative max-lg:hidden">
      <div class="bg-amber-900 w-[450px] h-[600px] absolute top-5 left-5 z-10"></div>
      <img :src="oldBooks" class="relative w-[450px] h-[600px] z-20 border-4 border-amber-900 shadow-xl shadow-amber-800" />
    </div>
  </div>
</template>
