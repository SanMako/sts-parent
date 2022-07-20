<template>
  <ant-breadcrumb-item v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-breadcrumb-item>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { BreadcrumbItem } from "ant-design-vue";

export default defineComponent({
  name: "StsBreadcrumbItem",
  components: {
    AntBreadcrumbItem: BreadcrumbItem,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
