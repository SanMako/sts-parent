<template>
  <ant-switch v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-switch>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Switch } from "ant-design-vue";

export default defineComponent({
  name: "StsSwitch",
  inheritAttrs: false,
  components: {
    AntSwitch: Switch,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
