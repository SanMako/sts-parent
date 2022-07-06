import { RouteRecordRaw } from "vue-router";

export const HomeRouter: RouteRecordRaw = {
  path: "/",
  name: "DefaultHome",
  component: () => import("/@/views/Home.vue"),
};

export const ButtonRouter: RouteRecordRaw = {
  path: "/button",
  name: "Button",
  component: () => import("/@/views/button/index.vue"),
};

/**
 * 静态路由
 */
export const routes: RouteRecordRaw[] = [HomeRouter, ButtonRouter];
