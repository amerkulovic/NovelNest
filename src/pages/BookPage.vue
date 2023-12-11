<script setup>
import { useMyStore } from "../stores/store";
import bookmark from "../assets/bookmark.svg";
import { onMounted, ref } from "vue";
const store = useMyStore();
const book = ref(store.selectedBook);

let bookmarks = ref([]);
let isBookmarked = ref(false);

const addBookmark = (bookmark) => {
  let bookmarkExists = false;
  for (let i = 0; i < store.bookmarks.length; i++) {
    if (bookmark.title === store.bookmarks[i].title) {
      let index = store.bookmarks.indexOf(store.bookmarks[i]);
      isBookmarked.value = !isBookmarked.value;
      store.bookmarks.splice(index, 1);
      bookmarkExists = true;
      break;
    }
  }
  if (!bookmarkExists) {
    store.bookmarks.push(bookmark);
    isBookmarked.value = !isBookmarked.value;
  }
  localStorage.setItem("bookmarks", JSON.stringify(store.bookmarks));
  console.log(store.bookmarks);
};

onMounted(() => {
  if (localStorage.getItem("bookmarks")) {
    bookmarks.value = JSON.parse(localStorage.getItem("bookmarks"));
    for (let i = 0; i < bookmarks.value.length; i++) {
      if (store.selectedBook.id === bookmarks.value[i].id) {
        console.log("Found it :)");
        isBookmarked.value = true;
        console.log(isBookmarked.value);
      } else {
        console.log("Can't find it :(");
      }
    }
  }
});
</script>
<template>
  <div class="bg-orange-200 flex items-center pb-10 max-xl:pt-20 max-sm:pt-5">
    <div class="flex justify-center relative py-10 max-md:flex-col max-md:items-center">
      <div class="bg-orange-300 h-[90%] w-[60%] absolute left-20 opacity-70 top-7 max-lg:w-full max-lg:left-0 max-lg:h-[95%]"></div>
      <div class="z-10 flex items-center">
        <img class="h-[403px] w-[268px] border-2 border-yellow-900 max-md:h-[353px]" :src="book.image" />
      </div>
      <section class="w-3/5 ml-5 flex flex-col justify-between z-10">
        <div>
          <h1 class="font-extrabold text-4xl py-2 max-sm:text-3xl">{{ book.title }}</h1>
          <p :key="category" v-for="category in book.categories" class="font-light text-xl py-1">{{ category }}</p>
          <p class="mt-8 font-bold max-sm:mt-2">{{ book.desc }}</p>
        </div>
        <div class="flex flex-col my-5">
          <p>Written By:</p>
          <p :key="author" v-for="author in book.authors">{{ author }}</p>
          <button @click="addBookmark(book)"><font-awesome-icon icon="fa-solid fa-book-bookmark" class="flex justify-start h-8 w-8" :class="isBookmarked ? 'text-orange-700' : 'text-slate-400'" /></button>
        </div>
      </section>
    </div>
  </div>
</template>
