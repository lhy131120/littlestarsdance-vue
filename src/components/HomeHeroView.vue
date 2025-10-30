<script setup>
import { ref } from 'vue';
const heros = ref([
  {
    path: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/hero/hero-1.jpg',
    buttonText: '探索課程',
    heroText: [
      {text: '通過舞蹈表達自我'},
      {text: '透過藝術表達建立自信'}
    ]
  },
  {
    path: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/hero/hero-2.jpg',
    buttonText: '探索課程',
    heroText: [
      {text: '從第一步到精彩表演'},
      {text: '用愛心關懷培養小舞者'}
    ]
  },
  {
    path: 'https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/hero/hero-3.jpg',
    buttonText: '探索課程',
    heroText: [
      {text: '讓您的孩子在快樂中舞蹈'},
      {text: '3-16歲專業舞蹈教育'}
    ]
  }
])
</script>


<template>
<div>
  {{ heros }}
  <p v-for="hero in heros" :key="hero.path">{{ hero.heroText }}</p>
</div>
</template>
