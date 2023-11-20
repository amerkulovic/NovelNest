<script setup>
import { ref, watch } from "vue";
import Nav from "./components/Nav.vue";
import HomeScreen from "./pages/HomeScreen.vue";
import BookCard from "./components/BookCard.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { useMyStore } from "./stores/store";

const route = useRoute();
const store = useMyStore();
const isHomePage = ref(route.path === "/");
console.log(isHomePage);

watch(() => {
  isHomePage.value = route.path === "/";
});

const books = ref([]);

function setBooks(foundBooks) {
  books.value = foundBooks;
  console.log(store.books);
}
</script>

<template>
  <Nav @booksFound="setBooks" />
  <HomeScreen v-if="isHomePage" @booksFound="setBooks" />
  <RouterView />
  <Footer />
</template>
