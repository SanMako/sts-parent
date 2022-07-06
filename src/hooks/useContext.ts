import {
  InjectionKey,
  provide,
  inject,
  reactive,
  readonly as defineReadonly,
  UnwrapRef,
} from "vue";

export interface ConfigProvideOptions {
  readonly?: boolean;
  createProvider?: boolean;
  native?: boolean;
}

type ShallowUnwrap<T> = {
  [P in keyof T]: UnwrapRef<T[P]>;
};

export function useConfigProvide<T>(
  context: any,
  key: InjectionKey<T> = Symbol(),
  options: ConfigProvideOptions = {}
) {
  const { readonly = true, createProvider = false, native = false } = options;

  const state = reactive(context);
  const provideData = readonly ? defineReadonly(state) : state;
  !createProvider && provide(key, native ? context : provideData);

  return {
    state,
  };
}

export function useConfigInject<T>(key: InjectionKey<T>, native?: boolean): T;
export function useConfigInject<T>(
  key: InjectionKey<T>,
  defaultValue?: any,
  native?: boolean
): T;

export function useConfigInject<T>(
  key: InjectionKey<T> = Symbol(),
  defaultValue?: any
): ShallowUnwrap<T> {
  return inject(key, defaultValue || {});
}
