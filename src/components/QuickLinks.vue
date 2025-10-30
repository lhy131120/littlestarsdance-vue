<script setup>
defineProps({
  navs: { type: Array, required: true }
})
</script>

<template>
  <nav aria-label="快速連結" class="px-2 lg:max-w-[300px] w-full lg:pt-10">
    <h2 class="font-medium text-primary-50 text-lg lg:text-2xl leading-base lg:leading-[1.2] tracking-[5%] mb-2 lg:mb-4">快速連結</h2>
    <ul class="flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2">
      <li v-for="nav in navs" :key="nav.section" class="basis-1/2 lg:basis-auto">
        <RouterLink
          :to="nav.path"
          class="inline-block px-0 lg:px-3 py-2 lg:text-xl text-grayscale-80 hover:text-primary-50"
          :aria-label="`前往 ${nav.section} 頁面`"
        >{{ nav.section }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
