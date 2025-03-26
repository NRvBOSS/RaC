<!-- <template>
  <div class="text-xl font-mono">
    <span>{{ displayedText }}</span
    ><span class="animate-blink">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const text = "Welcome to Nirvana Games!";
const displayedText = ref("");
let index = 0;

onMounted(() => {
  const interval = setInterval(() => {
    if (index < text.length) {
      displayedText.value += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100); // hər hərf 100ms-dən bir çıxır
});
</script>

<style>
@keyframes blink {
  50% {
    opacity: 0;
  }
}
.animate-blink {
  animation: blink 0.7s infinite;
}
</style> -->

<template>
  <AppHeader />

</template>

<script setup>
import AppHeader from "./AppHeader.vue";

</script>