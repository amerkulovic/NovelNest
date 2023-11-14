<template>
  <div>
    <h2>Book Search</h2>
    <input v-model="searchTerm" type="text" placeholder="Enter book name" />
    <button @click="searchBooks">Search</button>

    <div v-if="books.length">
      <h3>Search Results</h3>
      <ul>
        <li v-for="book in books" :key="book.id">{{ book.volumeInfo.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      books: [],
    };
  },
  methods: {
    async searchBooks() {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}`);
        const data = await response.json();
        this.books = data.items || [];
        console.log(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
