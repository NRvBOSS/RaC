<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="true"
    :navigation="true"
    :modules="modules"
    class="w-full h-screen"
    @slideChange="handleSlideChange"
  >
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index"
      class="relative flex flex-col justify-center items-center text-white p-10 bg-cover bg-center"
      :style="{ 'background-image': `url(${slide.image})` }"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- Text Content -->
      <div
        class="relative text-center max-w-2xl text-2xl md:text-3xl font-bold drop-shadow-lg pt-20"
        data-swiper-parallax="-200"
      >
        <span>{{ displayedText }}</span><span class="animate-blink">|</span>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = [
      {
        image: "https://etimg.etb2bimg.com/photo/88048208.cms",
        text: "Sürətli və etibarlı avtomobil icarəsi – İstədiyiniz maşını seçin, dərhal yola düşün!",
      },
      {
        image: "https://advertising.expedia.com/wp-content/uploads/2020/08/Car-Hero_1920x800.jpg",
        text: "Ən yaxşı qiymətlərlə avtomobil satışı və icarəsi – İndi alın, rahat sürün!",
      },
      {
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBjYXJ8ZW58MHx8MHx8fDA%3D",
        text: "RaC ilə arzuladığınız avtomobil bir toxunuş qədər yaxın!",
      },
    ];

    const displayedText = ref("");
    let currentIndex = 0;

    const typeText = (text) => {
      displayedText.value = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          displayedText.value += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 23); // Hər hərf 23ms-dən bir çıxır
    };

    const handleSlideChange = (swiper) => {
      currentIndex = swiper.realIndex;
      typeText(slides[currentIndex].text);
    };

    onMounted(() => {
      typeText(slides[currentIndex].text);
    });

    return {
      modules: [Parallax, Pagination, Navigation],
      slides,
      displayedText,
      handleSlideChange,
    };
  },
};
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
</style>
