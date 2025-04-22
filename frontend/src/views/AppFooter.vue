<template>
  <footer class="bg-gray-900 text-white py-12 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Contact Section -->
      <div>
        <h3 class="text-xl font-bold mb-6 text-amber-500">Contact Us</h3>
        <ul class="space-y-3">
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:0777175696" class="hover:text-amber-400 transition-colors">077 717 56 96</a>
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:nrv.corporation@gmail.com" class="hover:text-amber-400 transition-colors">nrv.corporation@gmail.com</a>
          </li>
        </ul>

        <h3 class="text-xl font-bold mt-10 mb-4 text-amber-500">Follow Us</h3>
        <div class="flex space-x-4">
          <a v-for="image in images" :key="image.id" :href="image.href" target="_blank" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
            <img :src="image.src" class="w-6 h-6" :alt="'Social icon ' + image.id">
          </a>
        </div>
      </div>

      <!-- Vehicles Section -->
      <div>
        <h3 class="text-xl font-bold mb-6 text-amber-500">Our Vehicles</h3>
        <ul class="space-y-3">
          <li v-for="brand in ['Toyota', 'Nissan', 'Porsche', 'Audi', 'Mercedes-Benz']" :key="brand">
            <a href="#" class="hover:text-amber-400 transition-colors">{{ brand }}</a>
          </li>
        </ul>
      </div>

      <!-- Locations Section -->
      <div>
        <h3 class="text-xl font-bold mb-6 text-amber-500">Locations</h3>
        <ul class="space-y-3">
          <li v-for="city in ['Baku', 'Berlin', 'Tokyo', 'Basel', 'Edinburgh']" :key="city">
            <a href="#" class="hover:text-amber-400 transition-colors">{{ city }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-12 pt-6">
      <p class="text-center text-sm text-gray-400">
        Copyright &copy; {{ currentYear }} | Powered by
        <a href="https://nirvanatech.vercel.app/" class="text-amber-400 hover:text-amber-300" target="_blank">Nirvana Tech</a>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    href: "https://www.linkedin.com/in/%C9%99lih%C3%BCseyn-ba%C4%9F%C4%B1rov-b46315267/",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    href: "https://github.com/NRvBOSS",
  },
]);

const currentYear = ref(new Date().getFullYear());
</script>