<template>
  <a-button v-bind="getBindValue" @click="onClick">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-button>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import buttonProps from "./props";

export default defineComponent({
  name: "StsButton",
  inheritAttrs: false,
  props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
