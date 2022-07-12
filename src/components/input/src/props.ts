import { PropType } from "vue";
import { inputTypes, InputTypes, SizeType, sizeType } from "/@/enums/TypeEnums";

const inputProps = {
  /**
   * 输入框的值
   */
  value: {
    type: [String, Number, Symbol] as PropType<string | number>,
    default: undefined,
  },
  /**
   * 默认占位符
   */
  placeholder: {
    type: [String, Number] as PropType<string | number>,
  },
  /**
   * 表单输入框的name属性
   */
  name: {
    type: String,
    default: "",
  },
  /**
   * 输入框的大小
   */
  size: {
    type: String,
    default: SizeType.default,
    validator: (v: string) => sizeType.includes(v),
  },
  /**
   * 是否禁用
   */
  disabled: { type: Boolean, default: false },
  /**
   * 是否显示边框
   */
  bordered: { type: Boolean, default: true },
  /**
   * 输入框类型
   */
  type: {
    type: String,
    default: InputTypes.text,
    validator: (v: string) => inputTypes.includes(v),
  },
  prefix: {
    type: String,
    default: "",
  },
  suffix: {
    type: String,
    default: "",
  },
};

export default inputProps;
