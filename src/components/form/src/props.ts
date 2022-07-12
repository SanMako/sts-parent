import { PropType } from "vue";

export const formProps = {
  /**
   * 配置 Form.Item 的 colon 的默认值
   * (只有在属性 layout 为 horizontal 时有效)
   */
  colon: {
    type: Boolean,
    default: true,
  },
  /**
   * 隐藏所有表单项的必选标记
   */
  hideRequiredMark: {
    type: Boolean,
    default: false,
  },
  /**
   * label 标签的文本对齐方式
   */
  labelAlign: {
    type: String,
    default: "right",
    validator: (v: string) => ["left", "right", "default", ""].includes(v),
  },
  /**
   * label 标签布局，同 <Col> 组件，设置 span offset 值，
   * 如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}
   */
  labelCol: {
    type: Object,
  },
  /**
   * label 标签的文本换行方式
   */
  labelWrap: {
    type: Boolean,
    default: false,
  },
  /**
   * 表单布局
   */
  layout: {
    type: String,
    default: "horizontal",
    validator: (v: string) =>
      ["horizontal", "vertical", "inline", "default", ""].includes(v),
  },
  /**
   * 表单数据对象
   */
  model: {
    type: Object,
  },
  /**
   * 表单名称，会作为表单字段 id 前缀使用
   */
  name: {
    type: String,
  },
  /**
   * 为 true 时不带样式，作为纯字段控件使用
   */
  noStyle: {
    type: Boolean,
    default: false,
  },
  /**
   * 表单验证规则
   */
  rules: {
    type: Object,
  },
  /**
   * 提交失败自动滚动到第一个错误字段
   */
  scrollToFirstError: {},
  /**
   * 是否在 rules 属性改变后立即触发一次验证
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  /**
   * 统一设置字段校验规则
   */
  validateTrigger: {
    type: [String, Array] as PropType<string | string[]>,
    default: "change",
  },
  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  wrapperCol: {},
  /**
   * 提交表单且数据验证成功后回调事件
   */
  finish: {},
  /**
   * 提交表单且数据验证失败后回调事件
   */
  finishFailed: {},
  /**
   * 数据验证成功后回调事件
   */
  submit: {},
  /**
   * 任一表单项被校验后触发
   */
  validate: {},
};

export const formItemProps = {
  /**
   * 是否自动关联表单域，对于大部分情况都可以使用自动关联，
   * 如果不满足自动关联的条件，可以手动关联
   */
  autoLink: {
    type: Boolean,
    default: true,
  },
  /**
   * 配合 label 属性使用，表示是否显示 label 后面的冒号
   */
  colon: {
    type: Boolean,
    default: true,
  },
  /**
   * 额外的提示信息，和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个
   */
  extra: {
    type: String,
  },
  /**
   * 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用
   */
  hasFeedback: {
    type: Boolean,
    default: false,
  },
  /**
   * 提示信息，如不设置，则会根据校验规则自动生成
   */
  help: {
    type: String,
  },
  /**
   * 设置子元素 label htmlFor 属性
   */
  htmlFor: {
    type: String,
  },
  /**
   * label 标签的文本
   */
  label: {
    type: String,
  },
  /**
   * 标签文本对齐方式
   */
  labelAlign: {
    type: String,
    default: "right",
    validator: (v: string) => ["left", "right", "default", ""].includes(v),
  },
  /**
   * label 标签布局，同 <Col> 组件，设置 span offset 值，
   * 如 {span: 3, offset: 12} 或 sm: {span: 3, offset: 12}
   */
  labelCol: {
    type: Object,
  },
  /**
   * 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的
   */
  name: {
    type: String,
  },
  /**
   * 是否必填，如不设置，则会根据校验规则自动生成
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * 表单验证规则
   */
  rules: {
    type: [Object, Array] as PropType<object | object[]>,
  },
  /**
   * 当某一规则校验不通过时，是否停止剩下的规则的校验。
   */
  validateFirst: {
    type: Boolean,
    default: false,
  },
  /**
   * 校验状态，如不设置，则会根据校验规则自动生成，可选：'success' 'warning' 'error' 'validating'
   */
  validateStatus: {
    type: String,
  },
  /**
   * 设置字段校验的时机
   */
  validateTrigger: {
    type: [String, Array] as PropType<string | string[]>,
    default: "change",
  },
  /**
   * 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol
   */
  wrapperCol: {
    type: Object,
  },
};
