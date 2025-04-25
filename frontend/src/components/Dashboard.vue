<script setup>
import { ref } from "vue";

const cars = ref(Array.from({ length: 12 }));
const handleAddCar = () => {
  cars.value.push({});
};
</script>

<template>
  <div class="flex flex-col w-full min-h-screen text-gray-800 bg-gray-50">
    <!-- Header -->
    <div class="flex justify-between items-center p-6">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900">
          Welcome, John Doe 👋
        </h1>
        <p class="text-lg text-gray-600 mt-1">Your listed vehicles:</p>
      </div>
      <img
        src="https://wallpapers.com/images/hd/gray-and-black-anime-pfp-killua-30hvlcjz4kexc4gw.jpg"
        alt="Profile"
        class="w-16 h-16 rounded-full border-4 border-amber-500 shadow-lg"
      />
    </div>

    <div class="border-t border-gray-300 my-6 mx-10"></div>

    <!-- Add Car Button -->
    <div class="flex justify-end px-10">
      <router-link to=""
        class="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Vehicle
      </router-link>
    </div>

    <!-- Vehicle Grid -->
    <div class="text-2xl font-bold text-center my-6 text-gray-900">
      Your Vehicles
    </div>
  </div>
</template>
