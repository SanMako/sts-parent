<template>
  <ant-tabs v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-tabs>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Tabs } from "ant-design-vue";

export default defineComponent({
  name: "StsTabs",
  inheritAttrs: false,
  TabPane: Tabs.TabPane,
  components: {
    AntTabs: Tabs,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
