<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import router from '../router'
import BorderButton from './BorderButtonView.vue';

const isMobileMenuOpen = ref(false);

const routes = ref(router.options.routes)
const navRoutes = computed(() => routes.value.filter(route => route.name !== 'home'))

const checkScreenSize = () => {
  if (window.innerWidth >= 992) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  checkScreenSize() // 初始檢查
  window.addEventListener('resize', checkScreenSize) // 監聽 resize
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize) // 清理事件監聽器
})

</script>

<template>
  <header class="py-1.5 lg:py-[15px]">
    <div class="max-w-330 mx-auto px-3">
      <div class="flex items-center justify-between">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          type="button"
          class="block lg:hidden w-10 h-10 hover:cursor-pointer focus:cursor-pointer group"
        >
          <span v-if="!isMobileMenuOpen">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-stroke duration-300 ease-in-out block"
            >
              <line
                x1="9.91667"
                y1="11.0833"
                x2="30.0833"
                y2="11.0833"
                class="stroke-primary-50 stroke-[1.83333] group-hover:stroke-primary-40 group-focus:stroke-primary-40"
                stroke-linecap="round"
              />
              <line
                x1="9.91667"
                y1="19.3333"
                x2="30.0833"
                y2="19.3333"
                class="stroke-primary-50 stroke-[1.83333] group-hover:stroke-primary-40 group-focus:stroke-primary-40"
                stroke-linecap="round"
              />
              <line
                x1="9.91667"
                y1="27.5834"
                x2="30.0833"
                y2="27.5834"
                class="stroke-primary-50 stroke-[1.83333] group-hover:stroke-primary-40 group-focus:stroke-primary-40"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span v-else>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-colors duration-300 ease-in-out block"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.3661 10.3661C10.8543 9.87796 11.6457 9.87796 12.1339 10.3661L29.6339 27.8661C30.122 28.3543 30.122 29.1457 29.6339 29.6339C29.1457 30.122 28.3543 30.122 27.8661 29.6339L10.3661 12.1339C9.87796 11.6457 9.87796 10.8543 10.3661 10.3661Z"
                class="fill-primary-50 group-hover:fill-primary-40 group-focus:fill-primary-40"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.6339 10.3661C30.122 10.8543 30.122 11.6457 29.6339 12.1339L12.1339 29.6339C11.6457 30.122 10.8543 30.122 10.3661 29.6339C9.87796 29.1457 9.87796 28.3543 10.3661 27.8661L27.8661 10.3661C28.3543 9.87796 29.1457 9.87796 29.6339 10.3661Z"
                class="fill-primary-50 group-hover:fill-primary-40 group-focus:fill-primary-40"
              />
            </svg>
          </span>
        </button>
        <h1>
          <router-link
            to="/"
            class="block w-[140px] lg:w-[300px] transition-all duration-300 ease-in-out"
          >
            <img
              src="https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/logo.png"
              alt="littlestarsdance"
            >
          </router-link>
        </h1>
        <nav class="flex items-center justify-end lg:gap-6 xl:gap-10">
          <router-link
            v-for="route in navRoutes"
            :key="route.path"
            :to="route.path"
            class="px-3 py-2 text-xl tracking-[1%] text-grayscale-90 hover:text-primary-50 focus:text-primary-50 hidden lg:block"
          >
            {{ route.name_tc.trim() }}
          </router-link>
          <button
            type="button"
            class="flex items-center gap-2 text-accent-50 hover:text-accent-40 focus:text-accent-40 text-lg border-0 xl:border-2 xl:border-accent-50 xl:hover:border-accent-40 xl:focus:border-accent-40 rounded-sm px-2 xl:px-6 py-2 hover:cursor-pointer focus:cursor-pointer group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="transition-all duration-300 ease-in-out block"
            >
              <g clip-path="url(#clip0_32_818)">
                <path
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                  class="stroke-accent-50 stroke-[1.83333] group-hover:stroke-accent-40 group-focus:stroke-accent-40"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0007 13.2222C14.0257 13.2222 15.6673 11.5806 15.6673 9.55552C15.6673 7.53048 14.0257 5.88885 12.0007 5.88885C9.97561 5.88885 8.33398 7.53048 8.33398 9.55552C8.33398 11.5806 9.97561 13.2222 12.0007 13.2222Z"
                  class="stroke-accent-50 stroke-[1.83333] group-hover:stroke-accent-40 group-focus:stroke-accent-40"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.87158 20.371C5.17409 19.3642 5.7931 18.4817 6.63677 17.8544C7.48044 17.2272 8.50384 16.8886 9.55514 16.8889H14.444C15.4967 16.8886 16.5213 17.228 17.3656 17.8567C18.2099 18.4853 18.8287 19.3698 19.13 20.3784"
                  class="stroke-accent-50 stroke-[1.83333] group-hover:stroke-accent-40 group-focus:stroke-accent-40"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_818">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span class="hidden xl:block">登入</span>
          </button>
        </nav>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div id="mobileMenu" :class="['fixed top-[52px] md:top-[61px] right-0 w-full h-dvh bg-primary-10 transition-all duration-300 ease-in-out', {'translate-x-full' : !isMobileMenuOpen, 'translate-x-0 opacity-100' : isMobileMenuOpen}]">
      <div class="py-6 px-3">
        <div class="relative mb-4">
          <input id="mainSearch" type="text" placeholder="搜尋..." class="bg-white py-[11px] ps-8 pe-[52px] border border-primary-50 rounded-lg w-full text-xl text-grayscale-70 tracking-[1%]" />
        </div>
        <nav class="flex flex-col gap-4 mb-12">
          <router-link @click="isMobileMenuOpen = false" v-for="mobileNav in routes" :key="mobileNav.path" :to="mobileNav.path" class="px-3 py-2 text-xl tracking-[1%] font-medium text-grayscale-90 hover:text-primary-50 focus:text-primary-50 block w-full"> {{ mobileNav.name_tc.trim() }} </router-link>
        </nav>
        <div class="flex flex-col gap-4">
          <BorderButton :content="'會員專區'" />
          <BorderButton :content="'登出'" />
        </div>
      </div>
    </div>
  </header>

</template>
