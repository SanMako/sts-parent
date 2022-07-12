<template>
  <Teleport to="{container}" v-slots="{ slots }"></Teleport>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onUpdated,
  watch,
  Teleport,
} from "vue";
import { useInjectPortal } from "/@/hooks/useTriggerContext";

export default defineComponent({
  name: "Portal",
  inheritAttrs: false,
  components: {
    Teleport,
  },
  props: {
    getContainer: PropTypes.func.isRequired,
    didUpdate: PropTypes.func,
  },
  setup(props) {
    let isSSR = true;
    // getContainer 不会改变，不用响应式
    let container: HTMLElement;
    const { shouldRender } = useInjectPortal();
    onBeforeMount(() => {
      isSSR = false;
      if (shouldRender.value) {
        container = props.getContainer();
      }
    });
    const stopWatch = watch(shouldRender, () => {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    onUpdated(() => {
      nextTick(() => {
        if (shouldRender.value) {
          props.didUpdate?.(props);
        }
      });
    });
    onBeforeUnmount(() => {
      if (container && container.parentNode) {
        container.parentNode.removeChild(container);
      }
    });
    return {
      isSSR,
      container,
    };
  },
});
</script>

<style lang="less"></style>
