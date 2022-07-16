<template>
  <ant-layout-sider v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-layout-sider>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { LayoutSider } from "ant-design-vue";

export default defineComponent({
  name: "StsLayoutSider",
  components: {
    AntLayoutSider: LayoutSider,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
