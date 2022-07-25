import type { App } from "vue";
import { withInstall } from "/@/utils";
import Menu from "./src/Menu.vue";
import MenuItem from "./src/MenuItem.vue";
import SubMenu from "./src/SubMenu.vue";
import MenuDivider from "./src/MenuDivider.vue";
import "ant-design-vue/lib/menu/style/index.css";

/* istanbul ignore next */
export const StsMenu = withInstall(Menu);
export const StsMenuItem = withInstall(MenuItem);
export const StsSubMenu = withInstall(SubMenu);
export const StsMenuDivider = withInstall(MenuDivider);

export default Object.assign(Menu, {
  StsMenuItem,
  StsSubMenu,
  StsMenuDivider,
  install: (app: App) => {
    app.component(Menu.name, Menu);
    app.component(MenuItem.name, MenuItem);
    app.component(SubMenu.name, SubMenu);
    app.component(MenuDivider.name, MenuDivider);
    return app;
  },
});
