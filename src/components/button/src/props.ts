import { PropType } from "vue";
import {
  buttonShape,
  ButtonShape,
  buttonTypes,
  ButtonTypes,
  SizeType,
  sizeType,
} from "/@/enums/TypeEnums";

const buttonProps = {
  /**
   * 按钮的标题
   */
  title: { type: String, default: "" },
  /**
   * 设置按钮类型
   */
  type: {
    type: String,
    default: ButtonTypes.none,
    // validator: (v: string) => v in ButtonTypes,
    validator: (v: string) => buttonTypes.includes(v),
  },
  /**
   * 将按钮宽度调整为其父宽度的选项
   * default: false
   */
  block: { type: Boolean, default: false },
  /**
   * 设置危险按钮
   */
  danger: { type: Boolean, default: false },
  /**
   * 按钮失效状态
   */
  disabled: { type: Boolean, default: false },
  /**
   * 幽灵属性，使按钮背景透明
   */
  ghost: { type: Boolean, default: false },
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  // href: { type: String },
  /**
   * 设置 button 原生的 type 值，可选值请参考 HTML 标准
   */
  htmlType: { type: String, default: "button" },
  /**
   * 设置按钮的图标类型
   */
  icon: { type: String },
  /**
   * 设置按钮载入状态
   */
  loading: {
    type: [Boolean, Object] as PropType<boolean | { delay?: number }>,
    default: (): boolean | { delay?: number } => false,
  },
  /**
   * 设置按钮形状
   */
  shape: {
    type: String,
    default: ButtonShape.default,
    // Invalid prop: custom validator check failed for prop "shape".
    // validator: (v: string) => v in ButtonShape,
    validator: (v: string) => buttonShape.includes(v),
  },
  /**
   * 设置按钮大小
   */
  size: {
    type: String,
    default: SizeType.default,
    validator: (v: string) => sizeType.includes(v),
  },
  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   */
  target: {
    type: String,
  },
  /**
   * 点击事件
   */
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>,
  },
};

export default buttonProps;
