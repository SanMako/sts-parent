<template>
  <a-input-password v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-input-password>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { inputPasswordProps } from "./props";

export default defineComponent({
  name: "StsPasswordInput",
  inheritAttrs: false,
  components: {},
  props: inputPasswordProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
