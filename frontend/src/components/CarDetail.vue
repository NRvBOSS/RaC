<template>
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
        <button class="bg-green-500 hover:bg-green-700 text-2xl text-white rounded-2xl mt-8 p-2">
          Call
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Car not found!</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useInfoStore } from "../stores/InfoStore";
import AppFooter from "../views/AppFooter.vue";

export default {
  setup() {
  
    const route = useRoute();
    const store = useInfoStore();
    const carId = Number(route.params.id);
    const car = computed(() => store.cars.find((item) => item.id === carId));

    return { car };
  },
};
</script>
