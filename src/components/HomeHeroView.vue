<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heros = ref([
  {
    path: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/hero/hero-1.jpg',
    buttonText: '探索課程',
    heroText: [
      { text: '通過舞蹈表達自我' },
      { text: '透過藝術表達建立自信' }
    ]
  },
  {
    path: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/hero/hero-2.jpg',
    buttonText: '探索課程',
    heroText: [
      { text: '從第一步到精彩表演' },
      { text: '用愛心關懷培養小舞者' }
    ]
  },
  {
    path: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/hero/hero-3.jpg',
    buttonText: '探索課程',
    heroText: [
      { text: '讓您的孩子在快樂中舞蹈' },
      { text: '3-16歲專業舞蹈教育' }
    ]
  }
]);

onMounted(() => {
  heros.value.forEach(hero => {
    const img = new Image();
    img.src = hero.path;
  });
});
</script>

<template>
  <Swiper
    :modules="[Autoplay, EffectFade]"
    effect="fade"
    :fade-effect="{ crossFade: true }"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
    :loop="true"
    class="w-full aspect-home-hero h-[702px] lg:h-auto"
  >
    <SwiperSlide v-for="(hero, index) in heros" :key="hero.path" class="swiper-slide-fade">
      <div class="relative w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden" :style="{ backgroundImage: `url(${hero.path})` }">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="max-w-[1680px] w-full mx-auto px-4 absolute inset-0 flex flex-col items-start justify-center text-white gap-4 lg:gap-8 z-10">
          <div v-for="(item, textIndex) in hero.heroText" :key="item.text" class="font-medium bg-primary-50/95 backdrop-blur-sm py-1 px-6 lg:py-3 lg:px-16 text-xl lg:text-[42px] lg:leading-[1.2] tracking-1 lg:tracking-15" :style="{ animationDelay: `${textIndex * 0.2}s` }">{{ item.text }}</div>
          <button type="button" class="cursor-pointer rounded-sm px-6 lg:px-8 py-2 lg:py-4 text-lg lg:text-4xl tracking-5 lg:tracking-10 lg:leading-[1.2] bg-accent-40 hover:bg-accent-30 focus:bg-accent-30 focus:border-2 focus:border-accent-20 focus-visible:ring-2 focus-visible:ring-accent-20 transition-all duration-300 ease-in-out transform hover:scale-105" :aria-label="`探索 ${hero.buttonText} - Slide ${index + 1}`"> {{ hero.buttonText }}</button>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>


