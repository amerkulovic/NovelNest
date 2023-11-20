<script setup>
import { useMyStore } from "../stores/store";
const store = useMyStore();
const book = store.selectedBook.volumeInfo;
const display = () => {
  console.log(store.selectedBook);
};
</script>
<template>
  <div class="bg-orange-200 flex items-center h-[550px]">
    <div class="flex justify-center relative py-10">
      <div class="bg-orange-300 h-[90%] w-[60%] absolute left-20 opacity-70 top-7 z-10"></div>
      <img class="h-[403px] max-sm:h-[150px] w-[268px] z-20 border-2 border-yellow-900" :src="book.imageLinks.thumbnail" />
      <section class="w-3/5 ml-5 flex flex-col justify-between z-20">
        <div>
          <h1 class="font-extrabold text-4xl py-2">{{ book.title }}</h1>
          <h2 :v-if="book.subtitle" class="font-extralight text-3xl pb-2">{{ book.subtitle }}</h2>
          <p :key="category" v-for="category in book.categories" class="font-light text-xl py-1">{{ category }}</p>
          <p class="pt-8">{{ book.description }}</p>
        </div>
        <div class="flex flex-col my-5">
          <p>Written By:</p>
          <p :key="author" v-for="author in book.authors">{{ author }}</p>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
/* Add the following style to your component's style block */
.z-0 {
  z-index: 0;
}
</style>
