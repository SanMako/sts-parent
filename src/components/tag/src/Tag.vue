<template>
  <ant-tag v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-tag>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Tag } from "ant-design-vue";

export default defineComponent({
  name: "StsTag",
  inheritAttrs: false,
  components: {
    AntTag: Tag,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
