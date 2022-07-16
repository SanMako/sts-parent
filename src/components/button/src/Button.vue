<template>
  <ant-button v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-button>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Button } from "ant-design-vue";
// import buttonProps from "./props";

export default defineComponent({
  name: "StsButton",
  inheritAttrs: false,
  components: {
    AntButton: Button,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
