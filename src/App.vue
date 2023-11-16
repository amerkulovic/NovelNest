<script setup>
import { ref } from "vue";
import Nav from "./components/Nav.vue";
import HomeScreen from "./components/HomeScreen.vue";
import Footer from "./components/Footer.vue";

const books = ref([]);

function setBooks(foundBooks) {
  books.value = foundBooks;
  console.log(books);
}
</script>

<template>
  <Nav @booksFound="setBooks" />
  <RouterView @booksFound="setBooks" />
  <!-- <HomeScreen @booksFound="setBooks" /> -->
  <div>
    <div v-if="books.length">
      <h3>Search Results</h3>
      <ul class="flex flex-row justify-evenly">
        <li v-for="book in books" :key="book.id"><img :src="book.volumeInfo.imageLinks.thumbnail" alt="Book Thumbnail" /></li>
      </ul>
    </div>
  </div>
  <Footer />
</template>
