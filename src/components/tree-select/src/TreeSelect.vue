<template>
  <ant-tree-select v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-tree-select>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { TreeSelect } from "ant-design-vue";

export default defineComponent({
  name: "StsTreeSelect",
  inheritAttrs: false,
  components: {
    AntTreeSelect: TreeSelect,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
