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
    <CarCard />
  </div>
</template>

<script setup>
import CarCard from "../components/CarCard.vue";
import AppHeader from "./AppHeader.vue";
// import LoadingSpinner from "../components/LoadingSpinner.vue";
</script>
