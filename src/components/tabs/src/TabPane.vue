<template>
  <ant-tab-pane v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-tab-pane>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { TabPane } from "ant-design-vue";

export default defineComponent({
  name: "StsTabPane",
  inheritAttrs: false,
  components: {
    AntTabPane: TabPane,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
