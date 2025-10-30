<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'  // 明確匯入 RouterLink 以優化 bundle
import QuickLinks from './QuickLinks.vue'
import ContactInfo from './ContactInfo.vue'

const footerNavs = [
  { section: '課程', path: '/courses' },  // 建議改為實際路由
  { section: '專業指導', path: '/guidance' },
  { section: '活動', path: '/events' },
  { section: '會員註冊', path: '/register' },
]

const contactInfo = computed(() => [  // 用 computed，未來若需動態資料易擴展
  {
    section: '信箱',
    content: 'info@littlestarsdance.com',
    sectionIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.375 4H3.625C2.92904 4.00077 2.26179 4.28596 1.76967 4.79299C1.27755 5.30002 1.00074 5.98749 1 6.70455V18.2955C1.00074 19.0125 1.27755 19.7 1.76967 20.207C2.26179 20.714 2.92904 20.9992 3.625 21H19.375C20.071 20.9992 20.7382 20.714 21.2303 20.207C21.7225 19.7 21.9993 19.0125 22 18.2955V6.70455C21.9993 5.98749 21.7225 5.30002 21.2303 4.79299C20.7382 4.28596 20.071 4.00077 19.375 4ZM18.7103 8.47361L11.9603 13.8827C11.8287 13.9881 11.6667 14.0454 11.5 14.0454C11.3333 14.0454 11.1713 13.9881 11.0397 13.8827L4.28969 8.47361C4.21038 8.4119 4.14377 8.33457 4.09372 8.24612C4.04367 8.15766 4.01118 8.05983 3.99815 7.95833C3.98511 7.85682 3.99179 7.75366 4.01778 7.65483C4.04378 7.556 4.08858 7.46349 4.14958 7.38265C4.21058 7.30182 4.28656 7.23428 4.37312 7.18397C4.45967 7.13365 4.55506 7.10156 4.65376 7.08956C4.75245 7.07756 4.85248 7.08589 4.94802 7.11406C5.04357 7.14223 5.13272 7.18968 5.21031 7.25366L11.5 12.2938L17.7897 7.25366C17.947 7.13129 18.1447 7.07762 18.34 7.10426C18.5354 7.1309 18.7128 7.2357 18.8338 7.396C18.9547 7.55631 19.0096 7.75923 18.9865 7.96088C18.9634 8.16254 18.8642 8.34673 18.7103 8.47361Z" fill="currentColor"/></svg>`,
    href: info => `mailto:${info.content}`,
  },
  {
    section: '電話',
    content: '+1 (555) 123-4567',
    sectionIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.35676 2.63774C4.57548 2.41934 4.8381 2.24992 5.12724 2.14071C5.41637 2.03149 5.72542 1.98498 6.03389 2.00424C6.34236 2.02351 6.64321 2.10812 6.91651 2.25246C7.18982 2.3968 7.42932 2.59759 7.61916 2.8415L9.86284 5.72413C10.2741 6.25291 10.4191 6.94169 10.2566 7.59172L9.57285 10.3293C9.53775 10.4712 9.4612 10.6086 9.50017 10.7494C9.53914 10.8902 9.69232 11.0296 9.79535 11.1331L12.8665 14.2045C12.9702 14.3078 13.109 14.4606 13.2501 14.4996C13.3911 14.5385 13.5295 14.4624 13.6715 14.427L16.4076 13.7433C16.7284 13.6635 17.0631 13.6575 17.3866 13.7257C17.71 13.7939 18.0138 13.9345 18.2751 14.137L21.1575 16.3796C22.1937 17.1859 22.2887 18.7172 21.3612 19.6435L20.0688 20.9361C19.1438 21.8611 17.7613 22.2674 16.4726 21.8136C13.1736 20.6543 10.1785 18.7657 7.71041 16.2884C5.23345 13.8204 3.34499 10.8256 2.18558 7.52672C1.7331 6.23916 2.13933 4.85534 3.06431 3.9303L4.35676 2.63774Z" fill="currentColor"/></svg>`,
    href: info => `tel:${info.content.replace(/\s|\(|\)/g, '')}`,
  },
  {
    section: '地址',
    content: '快樂谷舞蹈街 123 號，郵編 90210',
    sectionIcon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z" fill="currentColor"/></svg>`,
    href: info => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.content)}`,
  },
].map(info => ({ ...info, href: info.href({ ...info }) })))

const orderNavs = [
  { section: '隱私權政策', path: '/privacy' },
  { section: 'FAQ', path: '/faq' },
]
</script>

<template>
  <footer class="bg-basic-10 py-10 lg:py-15" role="contentinfo">
    <div class="max-w-330 mx-auto px-3">
      <div class="flex flex-col gap-10 lg:gap-14">
        <div class="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[120px]">
          <div class="w-full lg:w-auto lg:max-w-[400px]">
            <RouterLink to="/" class="block w-60 lg:w-[300px] transition-all duration-300 ease-in-out">
              <img
                src="https://raw.githubusercontent.com/lhy131120/littlestarsdance/refs/heads/main/assets/images/logo.png"
                alt="小星星舞蹈學校 logo"
                loading="lazy"
              >
            </RouterLink>
            <p class="text-grayscale-80 mt-4">夢想透過舞蹈建築快樂，自2010年以來創造了自信、優秀和快樂的小舞者</p>
          </div>
          <div class="flex flex-col lg:flex-row grow w-full gap-10">
            <QuickLinks :navs="footerNavs" />  <!-- 提取子組件 -->
            <ContactInfo :infos="contactInfo" />  <!-- 提取子組件 -->
          </div>
        </div>
        <div class="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-center pt-0 lg:pt-10">
          <p class="text-center mb-2 lg:mb-0 text-grayscale-80 text-sm lg:text-base">© 小星星舞蹈學校。保留所有權利。 | 為年輕舞者用</p>
          <nav class="flex justify-center gap-4">  <!-- 用 nav 提升語意 -->
            <a
              v-for="nav in orderNavs"
              :key="nav.section"
              :href="nav.path"
              class="text-grayscale-80 hover:text-grayscale-50 underline text-sm lg:text-lg leading-normal tracking-[0.05] transition-colors duration-300 ease-in-out focus-visible:outline-2 focus-visible:outline-primary-50"
              :aria-label="'查看 ' + nav.section"
            >
              {{ nav.section }}
            </a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* 全域 transition 統一（可選，減少模板重複） */
a { transition: color 0.3s ease; }
</style>
