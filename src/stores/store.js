// store.js
import { createPinia } from "pinia";
import { defineStore } from "pinia";

export const pinia = createPinia();

export const useMyStore = defineStore("myStore", {
  state: () => ({
    books: [],
    selectedBook: {},
  }),
});
