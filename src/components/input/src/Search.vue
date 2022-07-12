<template>
  <a-input-search v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-input-search>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { inputSearchProps } from "./props";

export default defineComponent({
  name: "StsInputSearch",
  inheritAttrs: false,
  components: {},
  props: inputSearchProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    console.log(getBindValue);

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
