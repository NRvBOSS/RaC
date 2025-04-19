<template>
  <!-- Footer component -->
  <footer class="bg-gray-900 text-white p-6">
    <!-- Main div -->
    <div class="container mx-auto flex">
      <!-- Contact div -->
      <div class="grid">
        <div class="grid gap-2">
          <p class="font-bold py-5">Contact Us</p>
          <li class="list-none">
            Telefon: <a class="hover:text-blue-400" href="">0777175696</a>
          </li>
          <li class="list-none">
            Email:
            <a class="hover:text-blue-400" href="">nrv.corporation@gmail.com</a>
          </li>
        </div>
        <div>
          <p class="font-bold mt-6">Follow us</p>
          <div class="flex">
            <a
              v-for="image in images"
              :key="image.id"
              :href="image.href"
              class="w-8 h-8 my-4 m-4 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
            >
              <img :src="image.src"
            </a>
          </div>
        </div>
      </div>

      <!-- Cars div -->
      <div class="grid ml-70">
        <div class="grid gap-2">
          <p class="font-bold py-5">Cars</p>
          <li class="list-none">
            <a class="hover:text-blue-400" href="">Toyota</a>
          </li>
          <li class="list-none">
            <a class="hover:text-blue-400" href="">Nissan</a>
          </li>
          <li class="list-none">
            <a class="hover:text-blue-400" href="">Porsche</a>
          </li>
          <li class="list-none">
            <a class="hover:text-blue-400" href="">Audi</a>
          </li>
          <li class="list-none">
            <a class="hover:text-blue-400" href="">Mercedes-Benz</a>
          </li>
        </div>
      </div>

      <!-- Locations div -->
      <div class="grid ml-110">
        <div class="grid gap-2">
          <p class="font-bold py-5">Locations</p>
          <li class="list-none hover:text-blue-400"><a href="">Baku</a></li>
          <li class="list-none hover:text-blue-400"><a href="">Berlin</a></li>
          <li class="list-none hover:text-blue-400"><a href="">Tokio</a></li>
          <li class="list-none hover:text-blue-400"><a href="">Basel</a></li>
          <li class="list-none hover:text-blue-400">
            <a href="">Edinburgh</a>
          </li>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 my-4"></div>
    <p class="text-center text-sm">
      Copyright &copy; {{ currentYear }} | Powered by
      <a
        href="https://nirvanatech.vercel.app/"
        class="text-blue-400"
        target="_blank"
        >Nirvana Tech</a
      >
    </p>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  {
    id: 1,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBu_Gia8ZgrUM1GO6xVd5RmieEkgbQKmCAadYpOunCfoY12LlzUfwOFShVg9UhE-PSrw&usqp=CAU",
    href: "https://www.linkedin.com/in/%C9%99lih%C3%BCseyn-ba%C4%9F%C4%B1rov-b46315267/",
  },
  {
    id: 2,
    src: "https://static-00.iconduck.com/assets.00/github-icon-2048x2048-iw6ut8fe.png",
    href: "https://github.com/NRvBOSS",
  },
]);

const currentYear = ref(new Date().getFullYear());
</script>
