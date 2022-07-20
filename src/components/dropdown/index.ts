import { withInstall } from "/@/utils";
import Dropdown from "./src/Dropdown.vue";
import DropdownButton from "./src/DropdownButton.vue";
import "ant-design-vue/lib/dropdown/style";

/* istanbul ignore next */
export const StsDropdown = withInstall(Dropdown);
export const StsDropdownButton = withInstall(DropdownButton);
