<script setup>
import { useMyStore } from "../stores/store";
import BookCard from "../components/BookCard.vue";

const store = useMyStore();
</script>
<template>
  <div class="flex flex-col items-center bg-orange-200" v-if="store.books.length">
    <BookCard v-for="book in store.books" :key="book.volumeInfo.title" :image="book.volumeInfo.imageLinks.thumbnail" :title="book.volumeInfo.title" :desc="book.volumeInfo.description" :author="book.volumeInfo.authors" />
  </div>
</template>
