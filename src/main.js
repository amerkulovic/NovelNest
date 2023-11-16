import { createApp } from "vue";
import "./style.css";
import {createRouter, createWebHistory} from "vue-router";
import HomeScreen from "./components/HomeScreen.vue"
import App from "./App.vue";
import "./styles/index.css";

const routes = [
    {path: '/', component: HomeScreen},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount("#app");
