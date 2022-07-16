import { withInstall } from "/@/utils";
import Input from "./src/Input.vue";
import InputPassword from "./src/Password.vue";
import InputSearch from "./src/Search.vue";
import "ant-design-vue/lib/input/style";

export const StsInput = withInstall(Input);
export const StsInputPassword = withInstall(InputPassword);
export const StsInputSearch = withInstall(InputSearch);

export default StsInput;
