import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "./pages/HomeScreen.vue";
import About from "./pages/About.vue";
import App from "./App.vue";
import "./styles/index.css";

const routes = [{ path: "/about", component: About }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
