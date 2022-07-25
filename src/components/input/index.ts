import "ant-design-vue/lib/input/style/index.css";

import { withInstall } from "/@/utils";
import Input from "./src/Input.vue";
import InputPassword from "./src/Password.vue";
import InputSearch from "./src/Search.vue";
import TextArea from "./src/TextArea.vue";

export const StsInput = withInstall(Input);
export const StsInputPassword = withInstall(InputPassword);
export const StsInputSearch = withInstall(InputSearch);
export const StsTextarea = withInstall(TextArea);

export default StsInput;
