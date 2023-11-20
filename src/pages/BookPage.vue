<script setup>
import { useMyStore } from "../stores/store";
const store = useMyStore();
const book = store.selectedBook.volumeInfo;
const display = () => {
  console.log(store.selectedBook);
};
</script>
<template>
  <div class="bg-orange-200 flex items-center pb-10 max-xl:pt-20">
    <div class="flex justify-center relative py-10 max-md:flex-col max-md:items-center">
      <div class="bg-orange-300 h-[90%] w-[60%] absolute left-20 opacity-70 top-7 max-lg:w-full max-lg:left-0 max-md:h-full"></div>
      <div class="z-10 flex items-center">
        <img class="h-[403px] w-[268px] border-2 border-yellow-900" :src="book.imageLinks.thumbnail" />
      </div>
      <section class="w-3/5 ml-5 flex flex-col justify-between z-10">
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
