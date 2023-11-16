<script setup>
import { ref, watch } from "vue";
import Nav from "./components/Nav.vue";
import HomeScreen from "./components/HomeScreen.vue";
import BookCard from "./components/BookCard.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isHomePage = ref(route.path === "/");
console.log(isHomePage);

watch(() => {
  isHomePage.value = route.path === "/";
});

const books = ref([]);

function setBooks(foundBooks) {
  books.value = foundBooks;
  console.log(books);
}
</script>

<template>
  <Nav @booksFound="setBooks" />
  <HomeScreen v-if="isHomePage" @booksFound="setBooks" />
  <RouterView />
  <div>
    <div class="flex flex-col items-center bg-orange-200" v-if="books.length">
      <BookCard v-for="book in books" :key="book.volumeInfo.title" :image="book.volumeInfo.imageLinks.thumbnail" :title="book.volumeInfo.title" :desc="book.volumeInfo.description" :author="book.volumeInfo.authors" />
    </div>
  </div>
  <Footer />
</template>
