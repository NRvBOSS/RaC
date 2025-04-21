<template>
  <AppHeader />
  <div>
    <h1 class="text-2xl font-bold pt-10 mx-10 mt-10">Our Cars</h1>
    <div class="border mx-10 my-4"></div>
    <CarCard />
  </div>
</template>

<script setup>
import CarCard from "../components/CarCard.vue";
import AppHeader from "./AppHeader.vue";
// import LoadingSpinner from "../components/LoadingSpinner.vue";
</script>
