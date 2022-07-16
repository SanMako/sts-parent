<template>
  <ant-layout v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-layout>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Layout } from "ant-design-vue";

export default defineComponent({
  name: "StsLayout",
  components: {
    AntLayout: Layout,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
