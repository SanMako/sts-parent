<template>
  <ant-page-header v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-page-header>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { PageHeader } from "ant-design-vue";

export default defineComponent({
  name: "StsPageHeader",
  inheritAttrs: false,
  components: {
    AntPageHeader: PageHeader,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
