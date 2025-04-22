<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchQuery = ref("");
const router = useRouter();

const handleSearch = () => {
  router.push({ 
    path: "/",
    query: { search: searchQuery.value.trim().toLowerCase() }
  });
};
</script>

<template>
  <header
    class="flex fixed justify-between items-center top-0 left-0 w-full p-4 flex-wrap bg-gray-900 backdrop-blur-sm z-50 shadow-lg border-b border-gray-700"
  >
    <!-- Logo -->
    <router-link 
      class="ml-6 text-3xl text-white font-bold hover:scale-105 transition-transform duration-300" 
      to="/"
    >
      <p class="text-white flex items-center">
        <span class="text-amber-500">RENT</span>
        <span class="text-gray-300">A</span>
        <span class="text-amber-400">CAR</span>
      </p>
    </router-link>

    <!-- Search Input -->
    <div class="relative w-[35rem]">
      <input
        v-model="searchQuery"
        @keyup.enter="handleSearch"
        class="border-2 border-gray-600 focus:outline-none h-[3rem] w-full rounded-xl px-4 pr-10 bg-gray-800 text-white transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 shadow-md placeholder-gray-400"
        placeholder="Search by name, city or type..."
      />
      <button 
        @click="handleSearch"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>

    <!-- Sign In Button -->
    <router-link
      to="/cars/account"
      class="duration-300 mr-6 hover:bg-gray-700 rounded-full transition-all border border-gray-600"
      href="#"
    >
      <img
        class="w-10 h-10 hover:scale-110 transition-transform bg-white rounded-full"
        src="https://cdn-icons-png.flaticon.com/512/3276/3276535.png"
        alt="Account"
      />
    </router-link>
  </header>
</template>