<template>
  <AppHeader />
  <div>
    <div class="relative text-center max-w-2xl mx-auto pt-25">
      <div class="relative">
        <img
          class="rounded-2xl w-full max-w-2xl"
          src="https://img.freepik.com/premium-photo/close-up-joyful-pleasant-family-which-gethering-their-vacation-with-teen-children-using-road-map-choose-right-path-car_141188-5035.jpg"
          alt="Family traveling with a map"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-5 rounded-2xl"
        >
          <h1 class="text-3xl font-bold">Welcome to RaC</h1>
          <p class="text-lg mt-3">
            The right car for your family, endless adventures ahead!
          </p>
        </div>
      </div>
    </div>

    <h1 class="text-2xl font-bold mx-10 mt-10">Our Cars</h1>
    <div class="border mx-10 my-4"></div>
    <CarCard :cars="cars" />
  </div>
  <AppFooter />
</template>

<script setup>
import { ref } from "vue";
import CarCard from "../components/CarCard.vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

const cars = ref([
  {
    id: 1,
    name: "Hyundai Elantra",
    year: 2009,
    sale: true,
    rent: false,
    people: 4,
    engine: "1.6L 4-cylinder",
    gearbox: "Automatic",
    gear: "Oil",
    price: 15000,
    image:
      "https://images.dealersync.com/2520/Photos/866026/20220812014223734_IMG_1287.jpg?_=78461920c722199df18633aa6f969fbbacd7c37d",
  },
  {
    id: 2,
    name: "Hyundai Sonata",
    year: 2009,
    sale: true,
    rent: false,
    people: 4,
    engine: "2.4L 4-cylinder",
    gearbox: "Automatic",
    gear: "Oil",
    price: 20000,
    image: "https://bumer.az/oc-content/uploads/23/11573.jpg",
  },
  {
    id: 3,
    name: "Hyundai Santa Fe",
    year: 2019,
    sale: false,
    rent: true,
    people: 4,
    engine: "2.4L 4-cylinder",
    gearbox: "Automatic",
    gear: "Oil",
    price: 75000,
    image:
      "https://turbo.azstatic.com/uploads/f460x343/2025%2F02%2F19%2F11%2F51%2F10%2F6d767674-44ab-487e-b5e9-ccf6d79940e5%2F710_n_84bQNwZvpGSEPPCvJ-ng.jpg",
  },
]);
</script>
