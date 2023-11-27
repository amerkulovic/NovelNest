<script setup>
import { onMounted, ref } from "vue";
import BookCard from "../components/BookCard.vue";
import LoadingPage from "./LoadingPage.vue";

let bookmarks = ref([]);

onMounted(() => {
  if (localStorage.getItem("bookmarks")) {
    bookmarks.value = JSON.parse(localStorage.getItem("bookmarks"));
  }
});
</script>

<template>
  <LoadingPage v-if="!bookmarks.length" message="No Books Found!" />
  <div v-else class="flex flex-col items-center py-5 bg-orange-200">
    <BookCard v-for="book in bookmarks" :key="book.title" :image="book.image" :title="book.title" :desc="book.desc" :author="book.authors" :book-object="book" />
  </div>
</template>
