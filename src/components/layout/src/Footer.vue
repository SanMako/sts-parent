<template>
  <ant-layout-footer v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-layout-footer>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { LayoutFooter } from "ant-design-vue";

export default defineComponent({
  name: "StsLayoutFooter",
  components: {
    AntLayoutFooter: LayoutFooter,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
