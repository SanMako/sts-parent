import "ant-design-vue/lib/tree-select/style/index.css";
import { withInstall } from "/@/utils";
import TreeSelect from "./src/TreeSelect.vue";

export const StsTreeSelect = withInstall(TreeSelect);

import { TreeSelectProps as AntTreeSelectProps } from "ant-design-vue";

export type TreeSelectProps = AntTreeSelectProps;

export default StsTreeSelect;
