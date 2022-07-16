<template>
  <ant-input v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-input>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
// import inputProps from "./props";
import { Input } from "ant-design-vue";

export default defineComponent({
  name: "StsInput",
  inheritAttrs: false,
  components: {
    AntInput: Input,
  },
  // props: inputProps,
  slots: ["prefix", "suffix"],
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
