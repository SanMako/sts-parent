<template>
  <ant-form v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-form>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Form } from "ant-design-vue";
import StsFormItem from "./FormItem.vue";
// import { formProps } from "./props";

export default defineComponent({
  name: "StsForm",
  inheritAttrs: false,
  components: {
    AntForm: Form,
  },
  Item: StsFormItem,
  // props: formProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
