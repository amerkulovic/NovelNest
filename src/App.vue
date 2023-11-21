<script setup>
import { ref, watch } from "vue";
import Nav from "./components/Nav.vue";
import HomeScreen from "./pages/HomeScreen.vue";
import BookCard from "./components/BookCard.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";
import { useMyStore } from "./stores/store";

const route = useRoute();
const isHomePage = ref(route.path === "/");

watch(() => {
  isHomePage.value = route.path === "/";
});
</script>

<template>
  <Nav />
  <HomeScreen v-if="isHomePage" />
  <RouterView />
  <Footer />
</template>
