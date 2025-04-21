<template>
  <LoadingSpinner v-if="!car" />

  <div v-if="car">
    <!-- Header info -->
    <p
      class="flex justify-center font-bold text-4xl mt-5 border-2 rounded-3xl p-5 bg-gray-200 m-8 shadow-lg"
    >
      {{ car.name }}, {{ car.engine }}, {{ car.year }}
    </p>

    <!-- Photo and info -->
    <div class="flex justify-center my-10 gap-10 flex-wrap">
      <img
        class="max-w-[500px] w-full rounded-3xl object-cover"
        :src="car.image"
        alt="Car Image"
      />

      <div
        class="bg-gray-200 p-10 rounded-3xl w-[300px] min-w-[250px] flex flex-col justify-between"
      >
        <div>
          <p class="font-bold text-3xl">{{ car.price }} $</p>
          <div class="border-t border-gray-700 my-4"></div>
          <p v-if="car.owner" class="font-bold text-xl">
            Owner: {{ car.owner }}
          </p>
          <p v-if="car.city" class="font-bold text-xl">City: {{ car.city }}</p>
          <p v-if="car.sale" class="font-bold text-xl">Sale</p>
          <p v-if="car.rent" class="font-bold text-xl">Rent</p>
        </div>

        <button
          class="bg-green-500 hover:bg-green-700 text-2xl text-white rounded-2xl mt-8 p-2 duration-150"
        >
          Call
        </button>
      </div>
    </div>

    <!-- Separator -->
    <div class="border-t border-gray-700 my-4 mx-8"></div>

    <!-- Description -->
    <div>
      <p class="font-bold text-3xl p-10">Descriptions</p>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 text-2xl gap-4 px-10 font-semibold"
      >
        <p v-if="car.city">City: {{ car.city }}</p>
        <p v-if="car.name">Model: {{ car.name }}</p>
        <p v-if="car.year">Release year: {{ car.year }}</p>
        <p v-if="car.ban">Ban: {{ car.ban }}</p>
        <p v-if="car.mileage">Mileage: {{ car.mileage }} km</p>
        <p v-if="car.color">Color: {{ car.color }}</p>
        <p v-if="car.engine">Engine: {{ car.engine }}</p>
        <p v-if="car.gearbox">Gearbox: {{ car.gearbox }}</p>
        <p v-if="car.gear">Gear: {{ car.gear }}</p>
        <p v-if="car.people">People: {{ car.people }}</p>
      </div>
      <div class="border-t border-gray-700 my-4 mx-8"></div>
    </div>
  </div>

  <!-- If can't find car -->
  <div v-else>
    <p class="font-bold text-3xl flex justify-center py-[20rem]">
      Car not found!
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner.vue";

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
