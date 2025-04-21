<script setup>
import { ref } from 'vue'

const cars = ref(Array.from({ length: 12 }));
const handleAddCar = () => {
  cars.value.push({});
}
</script>

<template>
  <div class="flex flex-col w-full min-h-screen text-gray-800">
    <!-- Header -->
    <div class="flex justify-end items-center p-6">
      <img
        src="https://wallpapers.com/images/hd/gray-and-black-anime-pfp-killua-30hvlcjz4kexc4gw.jpg"
        alt="Profile"
        class="w-20 h-20 rounded-full border-4 border-blue-400 shadow-lg"
      />
    </div>

    <!-- Welcome Text -->
    <div class="px-10">
      <p class="text-3xl font-extrabold">Welcome, John Doe 👋</p>
      <p class="text-xl text-gray-600 mt-1">Your listed cars:</p>
    </div>

    <div class="border-t border-gray-300 my-6 mx-10"></div>

    <!-- Add Car Button -->
    <div class="flex justify-end px-10">
      <button
        @click="handleAddCar"
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 ease-in-out"
      >
        + Add Car
      </button>
    </div>

    <!-- Car Grid -->
    <div class="text-2xl font-bold text-center my-6">Cars</div>
    
  </div>
</template>
