<template>
  <ant-radio-group v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-radio-group>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { RadioGroup } from "ant-design-vue";

export default defineComponent({
  name: "StsRadioGroup",
  components: {
    AntRadioGroup: RadioGroup,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
