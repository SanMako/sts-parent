<template>
  <a-form-item v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-form-item>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { formItemProps } from "./props";

export default defineComponent({
  name: "StsFormItem",
  inheritAttrs: false,
  components: {},
  props: formItemProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
