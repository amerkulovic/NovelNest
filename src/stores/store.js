// store.js
import { createPinia } from "pinia";
import { defineStore } from "pinia";

export const pinia = createPinia();

export const useMyStore = defineStore("myStore", {
  state: () => ({
    books: [],
    selectedBook: {},
    bookmarks: [],
  }),
  actions: {
    addBookmark(bookmark) {
      let bookmarkExists = false;
      for (let i = 0; i < this.bookmarks.length; i++) {
        if (bookmark.title === this.bookmarks[i].title) {
          let index = this.bookmarks.indexOf(this.bookmarks[i]);
          this.bookmarks.splice(index, 1);
          bookmarkExists = true;
          break;
        }
      }
      if (!bookmarkExists) {
        this.bookmarks.push(bookmark);
      }
      localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
      console.log(this.bookmarks);
    },
  },
});
