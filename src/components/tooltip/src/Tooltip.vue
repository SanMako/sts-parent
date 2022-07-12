<template>
  <span
    :class="getTooltipClass"
    @mouseenter="visiable = true"
    @mouseleave="visiable = false"
  >
    <slot v-if="$slots.default"></slot>
    <slot v-if="$slots.title && visiable" name="title"></slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import tooltipProps from "./props";
import { useStyle } from "/@/hooks/useAppContext";

export default defineComponent({
  name: "StsTooltip",
  inheritAttrs: false,
  components: {},
  props: tooltipProps,
  slots: ["title"],
  emits: ["update:visible", "visibleChange"],
  setup(props) {
    const { prefixStyle } = useStyle("tooltip");

    const visiable = ref(false);

    const getTooltipClass = computed(() => {
      const { placement } = props;

      return visiable.value
        ? {
            [`${prefixStyle}`]: true,
            [`${prefixStyle}-placement-${placement}`]: true,
          }
        : {};
    });

    return {
      visiable,
      getTooltipClass,
    };
  },
});
</script>

<style lang="less">
@import "./style/index.less";
</style>
