<template>
  <ant-row v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-row>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Row } from "ant-design-vue";

export default defineComponent({
  name: "StsRow",
  inheritAttrs: false,
  components: {
    AntRow: Row,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
