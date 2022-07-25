import type { App } from "vue";
import { withInstall } from "/@/utils";
import Layout from "./src/Layout.vue";
import Header from "./src/Header.vue";
import Footer from "./src/Footer.vue";
import Content from "./src/Content.vue";
import Sider from "./src/Sider.vue";
import "ant-design-vue/lib/layout/style/index.css";

/* istanbul ignore next */
export const StsLayoutHeader = withInstall(Header);
export const StsLayoutFooter = withInstall(Footer);
export const StsLayoutSider = withInstall(Sider);
export const StsLayoutContent = withInstall(Content);

export default Object.assign(Layout, {
  Header,
  Footer,
  Content,
  Sider,
  install: (app: App) => {
    app.component(Layout.name, Layout);
    app.component(Header.name, Header);
    app.component(Footer.name, Footer);
    app.component(Sider.name, Sider);
    app.component(Content.name, Content);
    return app;
  },
});
