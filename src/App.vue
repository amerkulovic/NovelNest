<script setup>
import { ref } from "vue";
import Nav from "./components/Nav.vue";

const searchTerm = ref("");
const books = ref([]);

function setBooks(foundBooks) {
  books.value = foundBooks;
}
</script>

<template>
  <Nav @booksFound="setBooks" />
  <div>
    <h2 class="text-2xl">Book Search</h2>
    <input v-model="searchTerm" type="text" placeholder="Enter book name" />
    <button @click="searchBooks">Search</button>

    <div v-if="books.length">
      <h3>Search Results</h3>
      <ul>
        <li v-for="book in books" :key="book.id">{{ book.volumeInfo.title }}</li>
      </ul>
    </div>
  </div>
</template>
