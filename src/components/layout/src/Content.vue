<template>
  <ant-layout-content v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-layout-content>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { LayoutContent } from "ant-design-vue";

export default defineComponent({
  name: "StsLayoutContent",
  components: {
    AntLayoutContent: LayoutContent,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
