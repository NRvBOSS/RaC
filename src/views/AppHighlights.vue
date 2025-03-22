<template>
  <!-- Highlighted -->
  <div class="flex justify-between">
    <h2 class="text-black font-bold pl-10 text-5xl pt-10">Highlighted</h2>
    <button class="text-black mx-10 mt-20 group">
      <router-link class="" to="/highlights">View all&rarr;</router-link>
      <div
        class="bg-black h-[2px] w-full scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500"
      ></div>
    </button>
  </div>

  <!-- Border -->
  <div class="border mx-10 my-4"></div>

  <!-- Cards -->
  <div>
    <div class="flex flex-wrap py-10 px-10 justify-between">
      <div
        v-for="item in highlightedItems"
        :key="item.id"
        class="bg-gray-100 m-2 h-auto w-96 rounded-2xl"
      >
        <img class="rounded-t-2xl" :src="item.image" alt="item.name" />
        <div class="flex gap-30">
          <p class="text-black font-bold text-2xl p-2">
            {{ item.name }}
          </p>
          <p class="font-bold py-3 text-black">Year: {{ item.year }}</p>
        </div>
        <div class="flex gap-10 p-4">
          <div>
            <p>People: {{ item.people }}</p>
            <p>Engine: {{ item.engine }}</p>
          </div>
          <div>
            <p>Gearbox: {{ item.gearbox }}</p>
            <p>Gear: {{ item.gear }}</p>
          </div>
        </div>

        <!-- Sep -->
        <div class="border-1 m-2"></div>

        <!-- Price -->
        <div class="flex justify-between">
          <p class="font-bold text-black p-4 content-center">
            Price: {{ item.price }}
          </p>
          <button class="bg-black text-white p-2 rounded-lg m-4">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const highlightedItems = ref([
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg/640px-2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg",
    name: "Toyota RAV4",
    year: "2021",
    people: 4,
    engine: "2.5L 4-cylinder",
    gearbox: "Automatic",
    gear: "Hybrid",
    price: 65000,
  },
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg/640px-2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg",
    name: "Toyota RAV4",
    year: "2021",
    people: 4,
    engine: "2.5L 4-cylinder",
    gearbox: "Automatic",
    gear: "Hybrid",
    price: 65000,
  },
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg/640px-2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg",
    name: "Toyota RAV4",
    year: "2021",
    people: 4,
    engine: "2.5L 4-cylinder",
    gearbox: "Automatic",
    gear: "Hybrid",
    price: 65000,
  },
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg/640px-2019_Toyota_RAV4_LE_2.5L_front_4.14.19.jpg",
    name: "Toyota RAV4",
    year: "2021",
    people: 4,
    engine: "2.5L 4-cylinder",
    gearbox: "Automatic",
    gear: "Hybrid",
    price: 65000,
  },
]);
</script>
