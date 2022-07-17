<template>
  <ant-tooltip v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-tooltip>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Tooltip } from "ant-design-vue";

export default defineComponent({
  name: "StsTooltip",
  components: {
    AntTooltip: Tooltip,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
