<template>
  <ant-breadcrumb v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-breadcrumb>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Breadcrumb } from "ant-design-vue";

export default defineComponent({
  name: "StsBreadcrumb",
  components: {
    AntBreadcrumb: Breadcrumb,
  },
  Item: Breadcrumb.Item,
  Separator: Breadcrumb.Separator,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
