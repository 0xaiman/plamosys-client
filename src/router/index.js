import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import TaskView from "@/views/TaskView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/task", name: "Task", component: TaskView },
  { path: "/about", name: "About", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
