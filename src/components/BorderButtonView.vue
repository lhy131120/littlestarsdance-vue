<script setup>
  const props = defineProps({
    content: {type: String, required: true},
  })
</script>

<template>
  <button type="button" class="w-full cursor-pointer block border-2 border-accent-50 hover:border-accent-30 focus:border-accent-40 rounded-sm font-medium text-lg tracking-[0.05] text-accent-50 p-2 hover:text-accent-40 focus:text-accent-40 focus:bg-accent-10">
    <span class="block text-lg">{{ props.content }}</span>
  </button>
</template>
