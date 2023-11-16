<script setup>
const props = defineProps(["image", "desc", "title", "author"]);
</script>
<template>
  <div class="flex justify-evenly my-3 bg-orange-300 w-5/6 py-3">
    <div class="flex justify-center items-center">
      <img :src="image" class="h-5/6 w-[200px] border-4 border-yellow-800" />
    </div>
    <section class="flex flex-col justify-between w-4/6 my-2">
      <section>
        <h2 class="text-2xl font-bold mb-3">{{ title }}</h2>
        <p class="font-light h-[200px] overflow-hidden" style="overflow-y: auto">{{ desc }}</p>
      </section>
      <section class="flex flex-row justify-between items-center mt-8">
        <p class="font-extralight italic">Written by {{ author[0] }}</p>
        <button class="p-3 bg-yellow-950 text-white font-bold">Read More</button>
      </section>
    </section>
  </div>
</template>

<style scoped>
p {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #999 transparent;
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
