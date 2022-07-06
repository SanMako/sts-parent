import { LocaleType } from "/@/enums/TypeEnums";
import { prefixStyle } from "/@/config/StyleConfig";

export const appConfigProviderProps = {
  /**
   * 国际化语言
   */
  locale: {
    type: String,
    default: LocaleType.default,
    validator: (v: string) => v in LocaleType,
  },
  /**
   * 样式前缀，用于样式隔离
   */
  prefixStyle: { type: String, default: prefixStyle },
  /**
   * TODO 如果不设置，就按照屏幕大小来确定
   * 是否是手机端
   */
  isMobile: { type: Boolean, default: false },
};
