<template>
  <ant-breadcrumb-separator v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-breadcrumb-separator>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { BreadcrumbSeparator } from "ant-design-vue";

export default defineComponent({
  name: "StsBreadcrumbSeparator",
  components: {
    AntBreadcrumbSeparator: BreadcrumbSeparator,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
