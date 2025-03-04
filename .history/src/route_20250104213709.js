import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home.vue";
import login from "./views/login.vue";
import signup from "./views/signup.vue";
import store from "./store/store";
import user from "./views/user.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "home" },
    {
      path: "/home",
      component: home,
      name: "home",
      meta: { requiresAuth: true },
    },
    { path: "/login", component: login, name: "login" },
    { path: "/signup", component: signup, name: "signup" },
    {
      path: "/user",
      component: user,
      name: "user",
    
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else {
    next();
  }
});

export default router;
