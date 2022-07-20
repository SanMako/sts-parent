import type { App } from "vue";
import { withInstall } from "/@/utils";
import Radio from "./src/Radio.vue";
import RadioButton from "./src/RadioButton.vue";
import RadioGroup from "./src/RadioGroup.vue";
import "ant-design-vue/lib/radio/style";

/* istanbul ignore next */
export const StsRadio = withInstall(Radio);
export const StsRadioButton = withInstall(RadioButton);
export const StsRadioGroup = withInstall(RadioGroup);

export default Object.assign(StsRadio, {
  StsRadioButton,
  StsRadioGroup,
  install: (app: App) => {
    app.component(Radio.name, Radio);
    app.component(RadioButton.name, RadioButton);
    app.component(RadioGroup.name, RadioGroup);
    return app;
  },
});
