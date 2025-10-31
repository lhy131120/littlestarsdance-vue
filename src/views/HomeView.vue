<script setup>
import { onMounted, ref } from 'vue';
import HomeHeroView from '@/components/HomeHeroView.vue';

import {Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const courses = ref([
  {
    courseImage: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/course-thumbnail/course-1.jpg',
    courseName: '幼兒芭蕾',
    courseDesc: '專為初學者設計的舞蹈課程，專注於基本動作、指令遵循和創意表達。',
    courseTime: '週六上午10:00',
    courseFee: 600,
    courseGroup: 8,
    type: ''
  },
  {
    courseImage: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/course-thumbnail/course-2.jpg',
    courseName: '嘻哈基礎',
    courseDesc: '學習嘻哈基礎,包含高能量動作、節奏訓練和街舞文化。',
    courseTime: '週二和週四 下午4:30',
    courseFee: 800,
    courseGroup: 8,
    type: ''
  },
  {
    courseImage: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/course-thumbnail/course-3.jpg',
    courseName: '青少年現代舞',
    courseDesc: '富有表現力的現代舞，幫助青少年找到獨特的藝術聲音。',
    courseTime: '週六上午10:30',
    courseFee: 800,
    courseGroup: 8,
    type: ''
  },
  {
    courseImage: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/course-thumbnail/course-4.jpg',
    courseName: '進階嘻哈',
    courseDesc: '透過複雜編舞和表演技巧，將您的嘻哈技能提升到新的水準。',
    courseTime: '週六和週日 下午4:30',
    courseFee: 800,
    courseGroup: 8,
    type: ''
  },
  {
    courseImage: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/course-thumbnail/course-11.jpg',
    courseName: '創意芭蕾',
    courseDesc: '透過創意動作和想像遊戲溫和地介紹芭蕾基礎。',
    courseTime: '週六下午2:00',
    courseFee: 800,
    courseGroup: 4,
    type: ''
  },
  {
    courseImage: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/course-thumbnail/course-6.jpg',
    courseName: '兒童爵士舞',
    courseDesc: '高能量爵士舞課程，專注於節奏、協調和樂趣！',
    courseTime: '週六上午11:00',
    courseFee: 800,
    courseGroup: 6,
    type: 'jazz'
  },
  {
    courseImage: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/course-thumbnail/course-12.jpg',
    courseName: '當代爵士',
    courseDesc: '結合爵士技巧與當代舞蹈風格，透過流暢的動作表達自己。',
    courseTime: '週六下午3:00',
    courseFee: 700,
    courseGroup: 3,
    type: 'jazz'
  },
])

onMounted(() => {
  courses.value.forEach(course => {
    const img = new Image();
    img.src = course.courseImage;
  })
})
</script>

<template>
  <main>
    <HomeHeroView />

    <!-- course section -->
    <section id="hot-course" class="py-20 lg:py-30">
      <div class="max-w-[1320px] w-full px-3 mx-auto relative">
        <h2 class="lg:text-center text-grayscale-80 text-2xl lg:text-[42px] leading-tight tracking-5 lg:tracking-15 mb-4">熱門課程</h2>
        <p class="lg:text-center text-grayscale-80 text-lg lg:text-2xl tracking-5 lg:leading-tight">適合年齡的舞蹈課程,旨在培養創造力和建立自信</p>

        <Swiper
        :modules="[Navigation]"
        :loop="true"
        :slides-per-view="2"
        :space-between="24"
        :breakpoints="{
          1200: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }"
        :navigation="{
          nextEl: '#hot-course .swiper-button-next',
          prevEl: '#hot-course .swiper-button-prev',
        }"
        >
          <SwiperSlide v-for="course in courses" :key="course.courseName">
            <div>{{ course.courseName }}</div>
            <div>{{ course.courseFee }}</div>
          </SwiperSlide>
        </Swiper>

        <div class="hot-prev swiper-button-prev">Prev</div>
        <div class="hot-next swiper-button-next">Next</div>
      </div>
    </section>
  </main>
</template>
