const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: { title: "Quasar Project" },
      },
    ],
  },
  {
    path: "/q-card",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/q-card",
        component: () => import("pages/QCard.vue"),
      },
    ],
  },
  {
    path: "/log-in",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/log-in",
        component: () => import("pages/LogIn.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
