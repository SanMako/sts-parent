<template>
  <ant-radio-button v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-radio-button>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { RadioButton } from "ant-design-vue";

export default defineComponent({
  name: "StsRadioButton",
  components: {
    AntRadioButton: RadioButton,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
