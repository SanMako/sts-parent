<template>
  <ant-form-item v-bind="getBindValue">
    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>
  </ant-form-item>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
// import { formItemProps } from "./props";
import { FormItem } from "ant-design-vue";

export default defineComponent({
  name: "StsFormItem",
  inheritAttrs: false,
  components: {
    AntFormItem: FormItem,
  },
  // props: formItemProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
