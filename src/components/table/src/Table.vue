<template>
  <ant-table v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-table>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Table } from "ant-design-vue";

export default defineComponent({
  name: "StsTable",
  inheritAttrs: false,
  components: {
    AntTable: Table,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
