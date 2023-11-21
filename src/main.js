import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import HomeScreen from "./pages/HomeScreen.vue";
import SearchPage from "./pages/SearchPage.vue";
import BookPage from "./pages/BookPage.vue";
import About from "./pages/About.vue";
import BookmarkPage from "./pages/BookmarkPage.vue";
import App from "./App.vue";
import "./styles/index.css";

const routes = [
  { path: "/about", component: About },
  { path: "/search", component: SearchPage },
  { path: "/bookmarks", component: BookmarkPage },
  { path: "/book", component: BookPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(createPinia()).mount("#app");
