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

export const InputRouter: RouteRecordRaw = {
  path: "/input",
  name: "Input",
  component: () => import("/@/views/input/index.vue"),
};

export const FormRouter: RouteRecordRaw = {
  path: "/form",
  name: "Form",
  component: () => import("/@/views/form/index.vue"),
};

export const TooltipRouter: RouteRecordRaw = {
  path: "/tooltip",
  name: "Tooltip",
  component: () => import("/@/views/tooltip/index.vue"),
};

/**
 * 静态路由
 */
export const routes: RouteRecordRaw[] = [
  HomeRouter,
  ButtonRouter,
  InputRouter,
  TooltipRouter,
  FormRouter,
];
