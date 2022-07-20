<template>
  <ant-popconfirm v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-popconfirm>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Popconfirm } from "ant-design-vue";

export default defineComponent({
  name: "StsPopconfirm",
  inheritAttrs: false,
  components: {
    AntPopconfirm: Popconfirm,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
