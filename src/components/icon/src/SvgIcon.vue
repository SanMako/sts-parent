<template>
  <svg
    aria-hidden="true"
    :style="getStyle"
    class="svg-icon"
    :class="[spin && 'svg-icon-spin']"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from "vue";

export default defineComponent({
  name: "SvgIcon",
  props: {
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    const getStyle = computed((): CSSProperties => {
      const { size } = props;
      let s = `${size}`;
      s = `${s.replace("px", "")}px`;
      return {
        width: s,
        height: s,
      };
    });

    return {
      symbolId,
      getStyle,
    };
  },
});
</script>

<style lang="less">
.svg-icon {
  display: inline-block;
  overflow: hidden;
  fill: currentColor;
  vertical-align: -0.15em;
}

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
