import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      name_tc: '首頁',
      // component: HomeView,
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/courses',
      name: 'courses',
      name_tc: ' 課程',
      component: () => import('../views/CoursesView.vue'),
    },
    {
      path: '/tutors',
      name: 'tutors',
      name_tc: '專業指導',
      component: () => import('../views/TutorsView.vue'),
    },
    {
      path: '/activities',
      name: 'activities',
      name_tc: '活動',
      component: () => import('../views/ActivitiesView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      name_tc: '最新消息',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      name_tc: '關於我們',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
