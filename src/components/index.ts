import type { App } from "vue";
import { SvgIcon } from "./icon";

export function registerStsComponents(app: App) {
  app.use(SvgIcon);
}

export function registerGlobComponents(app: App) {
  registerStsComponents(app);
}
