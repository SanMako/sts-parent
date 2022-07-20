<template>
  <ant-divider v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-divider>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Divider } from "ant-design-vue";

export default defineComponent({
  name: "StsDivider",
  inheritAttrs: false,
  components: {
    AntDivider: Divider,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
