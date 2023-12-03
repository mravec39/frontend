import { createRouter, createWebHistory } from 'vue-router'
import PcPartPickerWelcomeView from "@/views/PcPartPickerWelcomeView.vue";
import PcPartPickerBuilder from "@/views/PcPartPickerBuilderView.vue";
import PcPartPickerForum from "@/views/PcPartPickerForumView.vue";
import PcPartPickerSignUpView from "@/views/PcPartPickerSign-UpView.vue";
import PcPartPickerCpuView from "@/views/PcPartPickerCpuView.vue";

const routes = [
  {
    path: '/',
    name: 'PcPartPickerWP',
    component: PcPartPickerWelcomeView
  },
  {
    path: '/builder',
    name: 'PcPartPickerBuilder',
    component: PcPartPickerBuilder
  },
  {
    path: '/forum',
    name: 'PcPartPickerForum',
    component: PcPartPickerForum
  },
  {
    path: '/sign-up',
    name: 'PcPartPickerSignUpView',
    component: PcPartPickerSignUpView
  },
  {
    path: '/products/cpu',
    name: 'PcPartPickerCpuView',
    component: PcPartPickerCpuView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
