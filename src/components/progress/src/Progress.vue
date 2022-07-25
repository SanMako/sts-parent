<template>
  <ant-progress v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-progress>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Progress } from "ant-design-vue";

export default defineComponent({
  name: "StsProgress",
  inheritAttrs: false,
  components: {
    AntProgress: Progress,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
