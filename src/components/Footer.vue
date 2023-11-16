<script setup>
import { ref } from "vue";
import owlSvg from "../assets/Owl.svg";
import library from "../assets/library.jpg";
import papers from "../assets/papers.jpg";
import bookStack from "../assets/book-stack.jpg";
import bookShelf from "../assets/bookshelf.jpg";

const pictureArray = ref([bookShelf, library, papers, bookStack]);
</script>
<template>
  <div class="flex flex-row flex-wrap">
    <img v-for="(picture, index) in pictureArray" :key="index" class="w-1/4 h-1/3 max-sm:w-1/2" :src="picture" />
  </div>
  <footer class="flex items-center justify-between pt-5 px-10">
    <section class="pt-10">
      <h1 class="font-bold text-5xl mb-5">Novel<span class="font-extralight">Nest</span></h1>
      <ul class="font-thin text-xl pb-10">
        <li>Home</li>
        <li class="pt-3">Bookmarks</li>
      </ul>
    </section>
    <img :src="owlSvg" class="h-20 w-20" />
  </footer>
</template>
