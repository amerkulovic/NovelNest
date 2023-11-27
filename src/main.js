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

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBookBookmark);

const routes = [
  { path: "/", component: HomeScreen },
  { path: "/about", component: About },
  { path: "/search", component: SearchPage },
  { path: "/bookmarks", component: BookmarkPage },
  { path: "/book", component: BookPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(createPinia()).mount("#app");
