<template>
  <ant-tree v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-tree>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Tree } from "ant-design-vue";

export default defineComponent({
  name: "StsTree",
  inheritAttrs: false,
  components: {
    AntTree: Tree,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
