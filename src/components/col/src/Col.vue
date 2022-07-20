<template>
  <ant-col v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-col>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Col } from "ant-design-vue";

export default defineComponent({
  name: "StsCol",
  inheritAttrs: false,
  components: {
    AntCol: Col,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
