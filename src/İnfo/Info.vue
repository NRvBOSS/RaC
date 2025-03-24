<template>
  <CarCard :cars="cars" />
</template>

<script setup>
import { ref } from "vue";
import CarCard from "../components/CarCard.vue";

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
    images: [
      "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/ctjvjtjfxqavguj60uss.jpg",
      "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/raqc0fhylroix2detzyb.jpg",
    ],
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
    images: [],
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
