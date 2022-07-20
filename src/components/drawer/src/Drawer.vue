<template>
  <ant-drawer v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-drawer>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Drawer } from "ant-design-vue";

export default defineComponent({
  name: "StsDrawer",
  inheritAttrs: false,
  components: {
    AntDrawer: Drawer,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
