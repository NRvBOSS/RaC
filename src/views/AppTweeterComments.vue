<template>
    <div>
      <p class="text-4xl font-bold text-center my-10">Comments</p>
    </div>
  
    <!-- Swiper -->
    <Swiper
      class="my-10 bg-black py-10"
      :modules="[Autoplay]"
      :slides-per-view="3"
      :space-between="50" 
      :loop="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :breakpoints="{
        640: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 3, spaceBetween: 50 }
      }"
    >
      <SwiperSlide v-for="tweet in tweets" :key="tweet.id">
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg w-100px mx-10 my-10 p-5 flex flex-col justify-between">
          <!-- Tweet header -->
          <div class="flex p-4">
            <img
              class="w-16 h-16 object-cover rounded-full"
              :src="tweet.image"
              alt="tweet.name"
            />
            <div class="content-center ml-4">
              <p class="text-black font-bold text-xl">{{ tweet.name }}</p>
              <p class="text-gray-600">{{ tweet.username }}</p>
            </div>
          </div>
  
          <!-- Tweet content -->
          <div class="p-4">
            <p class="text-black">{{ tweet.tweet }}</p>
          </div>
  
          <!-- Separator -->
          <div class="border mx-4"></div>
  
          <!-- Date & Time -->
          <div class="flex items-center p-4 text-gray-600">
            <p>{{ tweet.time }} &#x25CF</p>
            <p class="ml-2">{{ tweet.date }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/autoplay";
  
  const tweets = ref([
    {
      id: 1,
      name: "John Doe",
      username: "@johndoe",
      tweet: "Bu avtomobilin performansı məni çox təəccübləndirdi! 🔥",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      time: "10:15AM",
      date: "22.03.2025",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "@janesmith",
      tweet: "Bu maşını almağı düşünürəm. Rəyi olan varmı?",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      time: "2:45PM",
      date: "15.03.2025",
    },
    {
      id: 3,
      name: "Ali Veli",
      username: "@aliveli",
      tweet: "Dizaynı çox xoşuma gəldi! 💯 Almaq üçün səbirsizlənirəm.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      time: "9:10AM",
      date: "20.07.2024",
    },
    {
      id: 4,
      name: "Qubaq Quluzade",
      username: "@qubaqquluzade",
      tweet: "Hər kəsə tövsiyə edirəm. Çox rahat maşındır! 👍",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      time: "5:30PM",
      date: "12.12.2024",
    },
    {
      id: 5,
      name: "Nigar Məhərrəmova",
      username: "@nigarm",
      tweet: "Sürüş keyfiyyəti inanılmazdır! Çox rahat maşındır.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      time: "8:20AM",
      date: "18.01.2025",
    },
    {
      id: 6,
      name: "Orxan Əhmədov",
      username: "@orxane",
      tweet: "Texnologiyası çox irəlidədir. Gələcəyin avtomobili! 🚗💨",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      time: "11:55AM",
      date: "05.02.2025",
    },
    {
      id: 7,
      name: "Leyla Əliyeva",
      username: "@leylalee",
      tweet: "Ekonomik yanacaq sərfiyyatı var. Uzun yolçuluqlar üçün əladır!",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      time: "4:10PM",
      date: "29.11.2024",
    },
    {
      id: 8,
      name: "Murad Hüseynov",
      username: "@muradh",
      tweet: "Bütün testlərdən keçdi. Keyfiyyət və rahatlıq bir arada!",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      time: "7:45PM",
      date: "07.03.2025",
    },
  ]);
  </script>
