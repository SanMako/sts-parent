import "/@/styles/index.less";
// ant-design-vue 基础样式
import "ant-design-vue/dist/antd.less";
// svg 图标
import "virtual:svg-icons-register";

import { createApp } from "vue";
import App from "./App.vue";
import { registerGlobComponents } from "/@/components";
import { router } from "/@/router";

import Antd from "ant-design-vue";

const app = createApp(App);

// 注册全局组件
registerGlobComponents(app);

// 全局加载router
app.use(router);

// 全局引入ant-design-vue
app.use(Antd);

app.mount("#app");
