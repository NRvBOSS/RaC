<template>
  <LoadingSpinner v-if="!car" />

  <div v-if="car" class="pb-20 bg-gray-50 min-h-screen">
    <!-- Header info -->
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-6 shadow-xl">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-start">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ car.name }}</h1>
            <div class="flex flex-wrap items-center gap-3">
              <span class="bg-amber-500/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">{{ car.year }}</span>
              <span class="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">{{ car.engine }}</span>
              <span v-if="car.city" class="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ car.city }}
              </span>
            </div>
          </div>
          <span 
            class="px-4 py-2 rounded-full text-white font-bold text-sm"
            :class="car.sale ? 'bg-green-600' : 'bg-blue-600'"
          >
            {{ car.sale ? 'FOR SALE' : 'FOR RENT' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Photo and info -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Car Image -->
        <div class="lg:w-2/3">
          <div class="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              class="w-full h-auto max-h-[500px] object-cover"
              :src="car.image || 'https://via.placeholder.com/800x500?text=Premium+Vehicle'"
              :alt="car.name"
            />
          </div>
          
          <!-- Specifications -->
          <div class="mt-8 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200 bg-gray-100">
              <h2 class="text-xl font-bold text-gray-800">TECHNICAL SPECIFICATIONS</h2>
            </div>
            <div class="px-6 py-4">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(value, key) in specifications" :key="key" class="flex items-start">
                  <div class="bg-amber-100 p-2 rounded-lg mr-4">
                    <component :is="specIcons[key]" class="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 class="text-gray-500 text-sm font-medium uppercase">{{ key.replace(/([A-Z])/g, ' $1').trim() }}</h3>
                    <p class="text-gray-900 font-semibold">{{ value || '—' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Price and Action Box -->
        <div class="lg:w-1/3">
          <div class="bg-white rounded-xl shadow-xl p-6 sticky top-6 border border-gray-200">
            <div class="mb-6">
              <p class="text-xs text-gray-500 uppercase tracking-wider">STARTING PRICE</p>
              <p class="text-3xl font-bold text-gray-900">${{ car.price.toLocaleString() }}</p>
              <p v-if="car.owner" class="text-gray-600 mt-2 text-sm">
                <span class="font-medium">Owner:</span> {{ car.owner }}
              </p>
            </div>

            <button
              class="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-lg font-bold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Owner
            </button>

            <div class="mt-6 border-t border-gray-200 pt-6">
              <h3 class="text-lg font-bold mb-4 text-gray-800">QUICK DETAILS</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">Mileage</span>
                  <span class="font-medium">{{ car.mileage || '—' }} km</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Color</span>
                  <span class="font-medium">{{ car.color || '—' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Seats</span>
                  <span class="font-medium">{{ car.people || '—' }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Transmission</span>
                  <span class="font-medium">{{ car.gearbox || '—' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200 bg-gray-100">
          <h2 class="text-xl font-bold text-gray-800">VEHICLE DESCRIPTION</h2>
        </div>
        <div class="px-6 py-4">
          <p v-if="car.description" class="text-gray-700">{{ car.description }}</p>
          <p v-else class="text-gray-500 italic">No detailed description available for this vehicle.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- If can't find car -->
  <div v-else-if="car === null" class="min-h-[60vh] flex items-center justify-center bg-gray-50">
    <div class="text-center p-8 max-w-2xl mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <h2 class="text-2xl font-bold text-gray-800 mt-4">Vehicle Not Found</h2>
      <p class="text-gray-600 mt-2">The vehicle you're looking for doesn't exist or may have been removed from our inventory.</p>
      <router-link 
        to="/" 
        class="mt-6 inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
      >
        View Available Vehicles
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner.vue";
import {
  CalendarIcon,
  CogIcon,
  ColorSwatchIcon,
  UserGroupIcon,
  LightningBoltIcon,
  SwitchHorizontalIcon,
  IdentificationIcon,
  LocationMarkerIcon
} from '@heroicons/vue/outline';

const car = ref();
const route = useRoute();
const id = route.params.id;

const specIcons = {
  year: CalendarIcon,
  engine: LightningBoltIcon,
  gearbox: CogIcon,
  gear: SwitchHorizontalIcon,
  people: UserGroupIcon,
  color: ColorSwatchIcon,
  ban: IdentificationIcon,
  city: LocationMarkerIcon,
  mileage: LightningBoltIcon
};

const specifications = computed(() => {
  if (!car.value) return {};
  return {
    year: car.value.year,
    ban: car.value.ban,
    mileage: car.value.mileage ? `${car.value.mileage} km` : null,
    color: car.value.color,
    engine: car.value.engine,
    gearbox: car.value.gearbox,
    gear: car.value.gear,
    people: car.value.people,
    city: car.value.city
  };
});

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/cars/${id}`);
    car.value = response.data;
  } catch (error) {
    console.error("Error fetching car details:", error);
    car.value = null;
  }
});
</script>