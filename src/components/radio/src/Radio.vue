<template>
  <ant-radio v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-radio>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Radio } from "ant-design-vue";

export default defineComponent({
  name: "StsRadio",
  components: {
    AntRadio: Radio,
  },
  Group: Radio.Group,
  Button: Radio.Button,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
