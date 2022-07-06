import { InjectionKey, Ref } from "vue";
import { LocaleType } from "/@/enums/TypeEnums";
import { useConfigProvide, useConfigInject } from "/@/hooks/useContext";

export interface AppConfigContextProps {
  prefixStyle: Ref<string>;
  isMobile: Ref<boolean>;
  locale: Ref<LocaleType>;
}

const key: InjectionKey<AppConfigContextProps> = Symbol();

/**
 * 设置全局配置
 * @param context
 * @returns
 */
export function useAppProvideContext(context: AppConfigContextProps) {
  return useConfigProvide<AppConfigContextProps>(context, key);
}

/**
 * 获取全局配置
 * @returns
 */
export function useAppInjectContext() {
  return useConfigInject<AppConfigContextProps>(key);
}

/**
 * 获取样式前缀
 * @param scope
 * @returns
 */
export function useStyle(scope: string) {
  const values = useAppInjectContext();

  return {
    prefixStyle: `${values.prefixStyle}-${scope}`,
    prefixStyleVar: values.prefixStyle,
  };
}
