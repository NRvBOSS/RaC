<template>
  <!-- Highlighted -->
  <div class="flex justify-between">
    <h2 class="text-black font-bold pl-10 text-5xl pt-10">Highlighted</h2>
    <router-link
      to="/cars"
      class="text-black mx-10 mt-20 group inline-block relative"
    >
      View all &rarr;
      <div
        class="bg-black h-[2px] w-full scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500"
      ></div>
    </router-link>
  </div>

  <!-- Border -->
  <div class="border mx-10 my-4"></div>

  <!-- Cards -->
  <div class="py-10 px-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in highlightedItems"
        :key="item.id"
        class="bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex-1 min-w-[300px]"
      >
        <img
          class="w-full h-52 object-cover rounded-t-2xl"
          :src="item.image"
          alt="item.name"
        />

        <div class="p-4">
          <div class="flex justify-between">
            <div class="">
              <p class="text-black font-bold text-2xl">{{ item.name }}</p>
              <p class="font-bold text-black">Year: {{ item.year }}</p>
            </div>

            <div class="flex font-bold text-2xl border rounded-2xl py-2 px-4">
              <p v-if="item.sale">Sale</p>
              <p v-else-if="item.rent">Rent</p>
            </div>
          </div>

          <!-- Car info -->

          <div class="flex justify-between mt-2">
            <div>
              <p>People: {{ item.people }}</p>
              <p>Engine: {{ item.engine }}</p>
            </div>
            <div>
              <p>Gearbox: {{ item.gearbox }}</p>
              <p>Gear: {{ item.gear }}</p>
            </div>
          </div>
        </div>

        <!-- Sep -->
        <div class="border mx-4"></div>

        <!-- Price -->
        <div class="flex justify-between items-center p-4">
          <p class="font-bold text-black">Price: {{ item.price }}</p>
          <button
            class="bg-black text-white cursor-pointer hover:bg-white hover:text-black duration-300 p-2 rounded-lg"
          >
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
    sale: false,
    rent: true,
  },
  {
    id: 2,
    image:
      "https://eu-images.contentstack.com/v3/assets/blt0bbd1b20253587c0/blta5f44858165dd4d2/66e0c1aea7bc54030f238993/2024_AudiRS7_performance_Nardo_grey.jpg",
    name: "Audi RS7",
    year: "2015",
    people: 4,
    engine: "4.0L 4-cylinder",
    gearbox: "Automatic",
    gear: "Oil",
    price: 75480,
    sale: true,
    rent: false,
  },
  {
    id: 3,
    image:
      "https://i.ytimg.com/vi/gldCFSrad3Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAxXQMpweUBrMfvVNTidK7748ul4w",
    name: "Lincoln MKZ",
    year: "2017",
    people: 4,
    engine: "2.0L 4-cylinder",
    gearbox: "Variator",
    gear: "Hybrid",
    price: 34500,
    sale: true,
    rent: false,
  },
  {
    id: 4,
    image:
      "https://www.topgear.com/sites/default/files/2022/03/11-Aston-Martin-DBX-707.jpg",
    name: "Aston Martin DBX",
    year: "2025",
    people: 4,
    engine: "4.0L V8",
    gearbox: "Automatic",
    gear: "Oil",
    price: 250000,
    sale: false,
    rent: true,
  },
  {
    id: 5,
    image:
      "https://directimports.com.br/wp-content/uploads/2023/05/alfa-romeo-stelvio-quadrifoglio-2023-15.webp",
    name: "Alfa Romeo Stelvio",
    year: "2023",
    people: 4,
    engine: "2.9L 4-cylinder",
    gearbox: "Automatic",
    gear: "Oil",
    price: 202470,
    sale: true,
    rent: false,
  },
  {
    id: 6,
    image: "https://www.auto-data.net/images/f0/Opel-Astra-G-Caravan.jpg",
    name: "Opel Astra",
    year: "1998",
    people: 4,
    engine: "1.8L Caravan",
    gearbox: "Automatic",
    gear: "Oil",
    price: 8000,
    sale: false,
    rent: true,
  },
]);
</script>
