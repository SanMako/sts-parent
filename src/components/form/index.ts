import { withInstall } from "/@/utils";
import stsForm from "./src/Form.vue";
import stsFormItem from "./src/FormItem.vue";
import "ant-design-vue/lib/form/style/index.css";

export const StsForm = withInstall(stsForm);
export const StsFormItem = withInstall(stsFormItem);

export default StsForm;
