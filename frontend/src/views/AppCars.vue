<template>
  <AppHeader />
  <div>
    <KeepAlive>
      <CarCard />
    </KeepAlive>
  </div>
</template>

<script setup>
import CarCard from "../components/CarCard.vue";
import AppHeader from "./AppHeader.vue";
// import LoadingSpinner from "../components/LoadingSpinner.vue";
</script>
