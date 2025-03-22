<template>
  <AppHeader />
  <AppCarousel />
  <AppHighlights />
  <AppTweeterComments />
  <AppFooter />
</template>

<script setup>
import AppHeader from "../src/views/AppHeader.vue";
import AppCarousel from '../src/views/AppCarousel.vue'
import AppFooter from "../src/views/AppFooter.vue";
import AppHighlights from "./views/AppHighlights.vue";
import AppTweeterComments from "./views/AppTweeterComments.vue";
</script>
