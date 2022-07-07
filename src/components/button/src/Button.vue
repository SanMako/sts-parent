<template>
  <button
    :class="getButtonClass"
    :disabled="disabled"
    @click="handleClick"
    :type="htmlType"
    v-bind="getBindValue"
  >
    <span v-if="iconName">
      <svg-icon style="vertical-align: -0.6em" :size="25" :name="iconName" />
    </span>
    <span v-if="$slots.icon && !iconName">
      <slot name="icon"></slot>
    </span>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, unref, watch } from "vue";
// import { Button } from "ant-design-vue";
import buttonProps from "./props";
import { useStyle } from "/@/hooks/useAppContext";
import { ButtonTypes } from "/@/enums/TypeEnums";

export default defineComponent({
  name: "StsButton",
  components: {
    // Button,
  },
  inheritAttrs: false,
  props: buttonProps,
  slots: ["icon"],
  emits: ["click"],
  setup(props, { slots, attrs, emit }) {
    const { prefixStyle } = useStyle("btn");

    const innerLoading: Ref<boolean | number> = ref(false);
    const delayTimeoutRef = ref(undefined);

    const loadingOrDelay = computed(() =>
      typeof props.loading === "object" && props.loading.delay
        ? props.loading.delay || true
        : !!props.loading
    );

    watch(
      loadingOrDelay,
      (val) => {
        clearTimeout(delayTimeoutRef.value);
        if (typeof loadingOrDelay.value === "number") {
          delayTimeoutRef.value = setTimeout(() => {
            innerLoading.value = val;
          }, loadingOrDelay.value);
        } else {
          innerLoading.value = val;
        }
      },
      {
        immediate: true,
      }
    );

    const iconName = computed(() => {
      return innerLoading.value ? "loading-base" : props.icon;
    });

    const getButtonClass = computed(() => {
      const { type, ghost, size, shape, danger, block } = props;
      let sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        default:
          break;
      }

      return {
        [`${prefixStyle}`]: true,
        [`${prefixStyle}-${type}`]: type,
        [`${prefixStyle}-background-ghost`]:
          ghost && !isUnborderedButtonType(type),
        [`${prefixStyle}-${sizeCls}`]: sizeCls,
        [`${prefixStyle}-loading`]: innerLoading.value,
        [`${prefixStyle}-${shape}`]: shape,
        [`${prefixStyle}-dangerous`]: !!danger,
        [`${prefixStyle}-block`]: block,
      };
    });

    const handleClick = (event: Event) => {
      if (innerLoading.value || props.disabled) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };

    const getBindValue = computed(() => ({ ...unref(attrs) }));

    return { getButtonClass, iconName, handleClick, getBindValue };
  },
});

function isUnborderedButtonType(type: ButtonTypes | undefined) {
  return type === ButtonTypes.text || type === ButtonTypes.link;
}
</script>

<style lang="less">
@import "./style/index.less";
</style>
