<template>
  <button :class="getButtonClass" :disabled="disabled" @click="handleClick">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref, watch } from "vue";
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
  emits: ["click", "mousedown"],
  setup(props, { slots, attrs, emit }) {
    const { type, ghost } = props;
    const { prefixStyle } = useStyle("btn");

    console.log("ghost ==> {}" + ghost);

    const getButtonClass = computed(() => {
      return {
        [`${prefixStyle}`]: true,
        [`${prefixStyle}-${type}`]: type,
        [`${prefixStyle}-background-ghost`]:
          ghost && !isUnborderedButtonType(type),
      };
    });

    return { getButtonClass };
  },
});

function isUnborderedButtonType(type: ButtonTypes | undefined) {
  return type === ButtonTypes.text || type === ButtonTypes.link;
}
</script>

<style lang="less">
@import "./style/index.less";
</style>
