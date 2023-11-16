<script setup>
// import { ref } from "vue";
import owlSvg from "../assets/Owl.svg";
import bookSvg from "../assets/book.svg";

// const emit = defineEmits(["booksFound"]);
// const searchTerm = ref("");
// const books = ref([]);

// const searchBooks = async () => {
//   try {
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm.value}`);
//     const data = await response.json();
//     books.value = data.items || [];
//     emit("booksFound", data.items);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
</script>
<template>
  <section class="flex flex-row justify-between items-center p-5 bg-orange-200">
    <h1 class="text-5xl font-extrabold w-1/3">Novel<span class="font-extralight">Nest</span></h1>
    <img :src="owlSvg" class="w-[60px] max-md:hidden" />
    <ul class="flex flex-row justify-end w-1/3">
      <li class="mx-2"><img :src="bookSvg" class="h-10 w-10" /></li>
    </ul>
  </section>
</template>
