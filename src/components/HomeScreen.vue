<script setup>
import photo from "../assets/book-photo.jpg";

import { ref } from "vue";
import owlSvg from "../assets/Owl.svg";
import HomeQuote from "./HomeQuote.vue";

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
  <div class="flex justify-around items-center bg-orange-200 pt-5 pb-10">
    <div class="relative">
      <div class="bg-amber-900 w-[450px] h-[550px] absolute top-5 right-5 z-10"></div>
      <img :src="photo" class="relative w-[450px] h-[550px] z-20 border-4 border-amber-900 shadow-xl shadow-amber-800" />
    </div>
    <div>
      <section class="w-[500px] text-3xl flex flex-col items-end">
        <p class="italic font-extralight pb-4">"The more that you read, the more things you will know. The more that you learn, the more places you'll go."</p>
        <span class="font-bold mr-5">- Dr.Seuss</span>
      </section>
      <div className="opacity-80 hover:opacity-100 flex items-center pt-20">
        <input className="h-20 w-full px-4 rounded-tl-xl rounded-bl-xl focus:outline-none text-2xl font-bold" placeholder="Find a Book!" v-model="searchTerm" />
        <button className="bg-white p-4 h-20 rounded-tr-xl rounded-br-xl " @click="searchBooks">
          <img className="h-10 w-10" :src="owlSvg" />
        </button>
      </div>
    </div>
  </div>
  <HomeQuote />
</template>
