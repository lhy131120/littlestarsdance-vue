<script setup>
defineProps({
  infos: { type: Array, required: true }
})
</script>

<template>
  <address aria-label="聯絡資訊" class="px-2 w-full not-italic lg:pt-10">
    <h2 class="font-medium text-primary-50 text-2xl leading-[1.2] tracking-[5%] mb-2 lg:mb-4">聯絡資訊</h2>
    <ul class="flex flex-col gap-2 lg:gap-8">
      <li v-for="info in infos" :key="info.section">
        <a
          :href="info.href"
          class="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-grayscale-80 hover:text-primary-50 group transition-colors duration-300 lg:text-xl"
          :aria-label="`${info.section}: ${info.content}`"
          rel="noopener noreferrer"
        >
          <span class="hidden lg:block w-6 h-6 shrink-0" v-html="info.sectionIcon"></span>
          <span class="whitespace-normal">{{ info.section }}: {{ info.content }}</span>
        </a>
      </li>
    </ul>
  </address>
</template>
