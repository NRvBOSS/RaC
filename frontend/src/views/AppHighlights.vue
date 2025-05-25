<template>
  <div class="bg-gray-50 py-12">
    <div class="flex justify-between items-center px-10">
      <h2 class="text-4xl font-bold text-gray-900">Featured Vehicles</h2>
      <router-link
        to="/cars"
        class="text-amber-600 hover:text-amber-700 font-medium flex items-center group"
      >
        View all
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </router-link>
    </div>

    <div class="border-t border-gray-300 mx-10 my-6"></div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-10"
    >
      <div
        v-for="item in highlightedItems"
        :key="item.id"
        class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-200 relative"
      >
        <!-- Badge -->
        <div class="absolute top-3 left-3 z-10">
          <span
            class="px-3 py-1 rounded-full text-sm font-semibold"
            :class="
              item.sale
                ? 'bg-green-100 text-green-800'
                : 'bg-blue-100 text-blue-800'
            "
          >
            {{ item.sale ? "FOR SALE" : "FOR RENT" }}
          </span>
        </div>

        <!-- Car Image -->
        <div class="relative h-56 overflow-hidden group">
          <img
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            :src="
              item.image ||
              'https://via.placeholder.com/400x250?text=Vehicle+Image'
            "
            :alt="item.name"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          ></div>
        </div>

        <!-- Car Info -->
        <div class="p-5 flex-grow">
          <div class="mb-4">
            <h3 class="text-xl font-bold text-gray-900 mb-1">
              {{ item.name }}
            </h3>
            <div class="flex items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {{ item.city || "Location not specified" }}
            </div>
          </div>

          <!-- Specifications -->
          <div class="grid grid-cols-2 gap-4 text-sm mb-6">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>{{ item.engine }}</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>{{ item.people }} seats</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{{ item.gearbox }}</span>
            </div>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              <span>{{ item.gear }}</span>
            </div>
          </div>
        </div>

        <!-- Price and CTA -->
        <div class="border-t border-gray-200 mx-5"></div>
        <div class="p-5 flex justify-between items-center">
          <div>
            <p class="text-xs text-gray-500">STARTING FROM</p>
            <p class="text-xl font-bold text-gray-900">
              ${{ item.price.toLocaleString() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const highlightedItems = ref([]);
const route = useRoute();

function getRandomCars(cars, count = 4) {
  const shuffled = cars.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/cars");
    highlightedItems.value = getRandomCars(response.data, 4);
  } catch (error) {
    console.error("Error fetching cars:", error);
  }
});
</script>
