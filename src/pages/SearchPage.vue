<script setup>
import { useMyStore } from "../stores/store";
import BookCard from "../components/BookCard.vue";

const store = useMyStore();
</script>
<template>
  <div class="bg-orange-200">
    <h1 class="font-extrabold text-3xl ml-10 pt-10 italic">Books Found:</h1>
    <div class="flex flex-col items-center py-5" v-if="store.books.length">
      <BookCard v-for="book in store.books" :key="book.id" :image="book.image" :title="book.title" :desc="book.desc" :author="book.authors" :book-object="book" />
    </div>
  </div>
</template>
