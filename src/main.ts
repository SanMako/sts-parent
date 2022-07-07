import "/@/styles/index.less";

import "virtual:svg-icons-register";

import { createApp } from "vue";
import App from "./App.vue";
import { registerGlobComponents } from "/@/components";
import { router } from "/@/router";

const app = createApp(App);

// 注册全局组件
registerGlobComponents(app);

// 全局加载router
app.use(router);

app.mount("#app");
