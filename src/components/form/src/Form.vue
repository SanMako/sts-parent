<template>
  <a-form v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </a-form>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { formProps } from "./props";

export default defineComponent({
  name: "StsForm",
  inheritAttrs: false,
  components: {},
  props: formProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
