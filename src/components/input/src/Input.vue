<template>
  <span :class="getContainerClass">
    <span v-if="hasPrefix()" :class="[`${prefixStyle}-prefix`]">
      <slot v-if="$slots.prefix" name="prefix"></slot>
      <span v-else>{{ prefix }}</span>
    </span>
    <input class="sts-input" v-bind="getBindValue" :class="getInputClass" />
    <span v-if="hasSuffix()" :class="[`${prefixStyle}-suffix`]">
      <slot v-if="$slots.suffix" name="suffix"></slot>
      <span v-else>{{ suffix }}</span>
    </span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import inputProps from "./props";
import { useStyle } from "/@/hooks/useAppContext";
import { omit } from "/@/utils";

export default defineComponent({
  name: "StsInput",
  inheritAttrs: false,
  components: {},
  props: inputProps,
  setup(props, { slots, attrs, emit }) {
    const { prefixStyle } = useStyle("input");

    const htmlProps = omit(props, ["size", "prefix", "suffix"]);
    const getBindValue = computed(() => ({ ...unref(htmlProps) }));

    const hasPrefix = () => {
      return props.prefix || slots.prefix;
    };

    const hasSuffix = () => {
      return props.prefix || slots.prefix;
    };

    const getContainerClass = computed(() => {
      return {
        [`${prefixStyle}-container`]: hasPrefix() || hasSuffix(),
      };
    });

    const getInputClass = computed(() => {
      const { size, disabled, bordered } = props;

      return {
        [`${prefixStyle}-sm`]: size === "small",
        [`${prefixStyle}-lg`]: size === "large",
        [`${prefixStyle}-disabled`]: disabled,
        [`${prefixStyle}-borderless`]: !bordered,
      };
    });

    return {
      prefixStyle,
      getContainerClass,
      getBindValue,
      getInputClass,
      hasPrefix,
      hasSuffix,
    };
  },
});
</script>

<style lang="less">
@import "./style/index.less";
</style>
