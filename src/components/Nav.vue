<script setup>
// import { ref } from "vue";
import owlSvg from "../assets/Owl.svg";
import bookSvg from "../assets/book.svg";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const isHomePage = ref(route.path === "/");

watch(() => {
  isHomePage.value = route.path === "/";
});

const emit = defineEmits(["booksFound"]);
const searchTerm = ref("");
const books = ref([]);

const searchBooks = async () => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm.value}`);
    const data = await response.json();
    books.value = data.items || [];
    emit("booksFound", data.items);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
</script>
<template>
  <section class="flex flex-row justify-between items-center p-5 bg-orange-200">
    <h1 class="text-5xl font-extrabold w-1/3">Novel<span class="font-extralight">Nest</span></h1>
    <img :src="owlSvg" class="w-[60px] max-md:hidden" />
    <ul class="flex flex-row justify-end items-center w-1/3">
      <li class="mx-2"><img :src="bookSvg" class="h-10 w-10" /></li>
      <div v-if="!isHomePage" className="opacity-80 hover:opacity-100 flex items-center">
        <input className="h-12 w-4/6 px-4 rounded-tl-xl rounded-bl-xl focus:outline-none text-xl font-bold" placeholder="Find a Book!" v-model="searchTerm" />
        <button className="bg-white p-4 h-12 rounded-tr-xl rounded-br-xl " @click="searchBooks">
          <img className="h-5 w-5" :src="owlSvg" />
        </button>
      </div>
    </ul>
  </section>
</template>
