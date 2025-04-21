<template>
  <div class="py-10 px-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="car in cars"
        :key="car.id"
        class="bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex-1 min-w-[300px]"
      >
        <img
          class="w-full h-52 object-cover rounded-t-2xl"
          :src="car.image"
          :alt="car.name"
        />

        <div class="p-4">
          <div class="flex justify-between">
            <div>
              <p class="text-black font-bold text-2xl">{{ car.name }}</p>
              <p class="font-bold text-black">Year: {{ car.year }}</p>
            </div>

            <div class="flex font-bold text-2xl border rounded-2xl py-2 px-4">
              <p v-if="car.sale">Sale</p>
              <p v-else-if="car.rent">Rent</p>
            </div>
          </div>

          <div class="flex justify-between mt-2">
            <div>
              <p>People: {{ car.people }}</p>
              <p>Engine: {{ car.engine }}</p>
            </div>
            <div>
              <p>Gearbox: {{ car.gearbox }}</p>
              <p>Gear: {{ car.gear }}</p>
            </div>
          </div>
        </div>

        <div class="border mx-4"></div>

        <div class="flex justify-between items-center p-4">
          <p class="font-bold text-black">Price: ${{ car.price }}</p>
          <router-link
            :to="`/cars/${car._id}`"
            @click="console.log('Navigating to ID:', car._id)"
            target="_blank"
            class="bg-black text-white hover:bg-gray-500 duration-300 p-2 rounded-lg"
          >
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const cars = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:4000/api/cars");
    cars.value = response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
  }
});
</script>
