<template>
  <LoadingSpinner v-if="!car" />
  <div v-if="car">
    <p class="flex justify-center font-bold text-4xl mt-5">
      {{ car.name }}, {{ car.engine }}, {{ car.year }}
    </p>
    <div class="flex justify-center my-15 gap-10">
      <img class="flex px-25 w-200 rounded-4xl" :src="car.image" alt="" />
      <div class="bg-gray-200 grid p-15 rounded-3xl gap-2">
        <p class="font-bold text-3xl">{{ car.price }} AZN</p>
        <p class="font-bold text-xl">{{ car.owner }}</p>
        <p class="font-bold text-xl">{{ car.city }}</p>
        <button
          class="bg-green-500 hover:bg-green-700 text-2xl text-white rounded-2xl mt-8 p-2"
        >
          Call
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Car not found!</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner.vue";
import AppFooter from "../views/AppFooter.vue";

const car = ref();
const route = useRoute();
const id = route.params.id;
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:4000/api/cars/${id}`);
    car.value = response.data;
  } catch (error) {
    console.error("Error fetching car details:", error);
  }
});
</script>
