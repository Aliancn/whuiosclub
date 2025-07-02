import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JoinView from '../views/JoinView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/'
    },
    {
      path: '/join',
      name: 'JoinUs',
      component: JoinView
    },
    {
      path : '/awards',
      name : 'Awards',
      component : () => import('../views/AwardView.vue')
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: () => import('../views/AboutUsView.vue')
    },
    {
      path: '/competition',
      name: 'Competition',
      component: () => import('../views/CompetitionView.vue')
    },
    {
      path: '/activities',
      name: 'Activities',
      component: () => import('../views/ActivitiesView.vue')
    },
    {
      path: '/message-board',
      name: 'MessageBoard',
      component: () => import('../views/MessageBoardView.vue')
    }
  ]
})

export default router
