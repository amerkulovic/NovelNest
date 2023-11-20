<script setup>
import { useMyStore } from "../stores/store";
const store = useMyStore();
const book = store.selectedBook.volumeInfo;
const display = () => {
  console.log(store.selectedBook);
};
</script>
<template>
  <div class="bg-orange-200">
    <img :src="book.imageLinks.thumbnail" />
    <h1>{{ book.title }}</h1>
    <h2 :v-if="book.subtitle">{{ book.subtitle }}</h2>
    <p>{{ book.description }}</p>
    <p :key="category" v-for="category in book.categories">{{ category }}</p>
    <p :key="author" v-for="author in book.authors">{{ author }}</p>
  </div>
  <!-- <button @click="display">Click</button> -->
</template>
