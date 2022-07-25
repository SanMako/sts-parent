import "ant-design-vue/lib/tabs/style/index.css";
import { withInstall } from "/@/utils";
import Tabs from "./src/Tabs.vue";
import TabPane from "./src/TabPane.vue";

export const StsTabs = withInstall(Tabs);
export const StsTabPane = withInstall(TabPane);

export default StsTabs;
