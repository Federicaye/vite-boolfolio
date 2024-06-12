import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import PostList from "./pages/ProjectsList.vue";
import PostComponent from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";
import ContactComponent from "./pages/Contact.vue";
import AboutComponent from "./pages/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsList,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/about",
      name: "about-us",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };