import type { App } from "vue";
import { withInstall } from "/@/utils";
import Menu from "./src/Menu.vue";
import MenuItem from "./src/MenuItem.vue";
import SubMenu from "./src/SubMenu.vue";
import "ant-design-vue/lib/menu/style";

/* istanbul ignore next */
export const StsMenu = withInstall(Menu);
export const StsMenuItem = withInstall(MenuItem);
export const StsSubMenu = withInstall(SubMenu);

export default Object.assign(Menu, {
  StsMenuItem,
  StsSubMenu,
  install: (app: App) => {
    app.component(Menu.name, Menu);
    app.component(MenuItem.name, MenuItem);
    app.component(SubMenu.name, SubMenu);
    return app;
  },
});
