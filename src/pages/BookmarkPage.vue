<script setup>
import { onMounted, ref } from "vue";
import BookCard from "../components/BookCard.vue";

let bookmarks = ref([]);

onMounted(() => {
  if (localStorage.getItem("bookmarks")) {
    bookmarks.value = JSON.parse(localStorage.getItem("bookmarks"));
  }
});
</script>

<template>
  <div class="flex flex-col items-center py-5 bg-orange-200" v-if="bookmarks.length">
    <BookCard v-for="book in bookmarks" :key="book.title" :image="book.image" :title="book.title" :desc="book.desc" :author="book.authors" :book-object="book" />
  </div>
</template>
