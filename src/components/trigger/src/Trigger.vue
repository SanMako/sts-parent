<template></template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";
import triggerProps from "./porps";
import { useInjectTrigger } from "/@/hooks/useTriggerContext";
import { getAlignFromPlacement } from "/@/utils";

const ALL_HANDLERS = [
  "onClick",
  "onMousedown",
  "onTouchstart",
  "onMouseenter",
  "onMouseleave",
  "onFocus",
  "onBlur",
  "onContextmenu",
];

export default defineComponent({
  name: "StsTrigger",
  inheritAttrs: false,
  components: {},
  props: triggerProps,
  setup(props) {
    const align = computed(() => {
      const { popupPlacement, popupAlign, builtinPlacements } = props;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(
          builtinPlacements,
          popupPlacement,
          popupAlign
        );
      }
      return popupAlign;
    });
    const { setPortal, getPortal } = useInjectTrigger();
    const popupRef = ref(null);
    const setPopupRef = (val) => {
      popupRef.value = val;
    };
    return {
      getPortal,
      setPortal,
      vcTriggerContext: inject(
        "vcTriggerContext",
        {} as { onPopupMouseDown?: (...args: any[]) => void }
      ),
      popupRef,
      setPopupRef,
      triggerRef: ref(null),
      align,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: false,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {},
    };
  },
  data() {
    const props = this.$props;
    let popupVisible;
    if (this.popupVisible !== undefined) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach((h) => {
      (this as any)[`fire${h}`] = (e) => {
        (this as any).fireEvents(h, e);
      };
    });
    (this as any).setPortal?.(
      <Portal
        key="portal"
        v-slots={{ default: this.getComponent }}
        getContainer={this.getContainer}
        didUpdate={this.handlePortalUpdate}
      ></Portal>
    );
    return {
      prevPopupVisible: popupVisible,
      sPopupVisible: popupVisible,
      point: null,
    };
  },
});
</script>

<style lang="less"></style>
