<script setup>
// import { ref } from "vue";
import owlSvg from "../assets/Owl.svg";
import bookSvg from "../assets/book.svg";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import { useMyStore } from "../stores/store";

const route = useRoute();
const store = useMyStore();
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
    for (let i = 0; i < data.items.length; i++) {
      const element = data.items[i];
      books.value.push({
        title: element.title,
        desc: element.desc
      })
      
    }
    books.value = data.items || [];
    store.books = books.value;
    emit("booksFound", data.items);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
</script>
<template>
  <section class="flex flex-row justify-between items-center p-5 bg-orange-200">
    <h1 class="text-5xl font-extrabold w-1/3">
      <router-link to="/">Novel<span class="font-extralight">Nest</span></router-link>
    </h1>
    <img :src="owlSvg" class="w-[60px] max-md:hidden" />
    <ul class="flex flex-row justify-end items-center w-1/3">
      <router-link to="/bookmarks"
        ><li class="mx-2"><img :src="bookSvg" class="h-10 w-10" /></li
      ></router-link>
      <div v-if="!isHomePage" className="opacity-80 hover:opacity-100 flex items-center">
        <input className="h-12 w-4/6 px-4 rounded-tl-xl rounded-bl-xl focus:outline-none text-xl font-bold" placeholder="Find a Book!" v-model="searchTerm" />
        <router-link to="/search"
          ><button className="bg-white p-4 h-12 rounded-tr-xl rounded-br-xl " @click="searchBooks">
            <img className="h-5 w-5" :src="owlSvg" /></button
        ></router-link>
      </div>
    </ul>
  </section>
</template>
