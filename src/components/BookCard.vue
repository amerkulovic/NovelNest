<script setup>
import { useMyStore } from "../stores/store";
const store = useMyStore();
const props = defineProps(["image", "desc", "title", "author", "bookObject"]);

const storeBookInfo = () => {
  store.selectedBook = props.bookObject;
};
</script>
<template>
  <div class="flex justify-evenly my-3 bg-orange-300 w-5/6 py-3">
    <div class="flex justify-center items-center max-md:mx-3">
      <img :src="image" class="h-5/6 w-[200px] border-4 border-yellow-800 max-md:w-[175px] max-md:h-4/6 transition-all duration-300" />
    </div>
    <section class="flex flex-col justify-between w-4/6 my-2">
      <section>
        <h2 class="text-3xl font-bold mb-3 italic max-sm:text-xl max-sm:mr-2 transition-all duration-300">{{ title }}</h2>
        <p class="font-extralight h-[200px] max-sm:mx-2 overflow-hidden max-md:h-[150px] transition-all duration-300" style="overflow-y: auto"><span class="font-bold">Summary: </span>{{ desc }}</p>
      </section>
      <section class="flex flex-row justify-between items-center mt-8 max-md:mt-4">
        <p class="font-extralight italic">Written by {{ author[0] }}</p>
        <router-link to="/book">
          <button class="p-3 bg-yellow-950 text-white font-bold max-md:p-2 max-md:mx-2 max-md:text-sm" @click="storeBookInfo">Read More</button>
        </router-link>
      </section>
    </section>
  </div>
</template>

<style scoped>
p {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #8d8d8d transparent;
}

p::-webkit-scrollbar {
  width: 6px;
}

p::-webkit-scrollbar-thumb {
  margin-left: 10px;
  background-color: transparent;
  border-radius: 75px;
}

p::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
