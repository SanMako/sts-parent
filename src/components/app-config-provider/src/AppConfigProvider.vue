<template></template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import { appConfigProviderProps } from "./props";
import { useAppProviderContext } from "/@/hooks/useAppContext";

export default defineComponent({
  name: "AppConfigProvider",
  inheritAttrs: false,
  props: appConfigProviderProps,
  setup(props, { slots }) {
    const { locale, prefixStyle, isMobile } = toRefs(props);

    // 将变量注入到全局变量中
    useAppProviderContext({ locale, prefixStyle, isMobile });

    return () => slots.default?.();
  },
});
</script>

<style lang="less"></style>
