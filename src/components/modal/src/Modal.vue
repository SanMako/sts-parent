<template>
  <ant-modal v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-modal>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Modal } from "ant-design-vue";

export default defineComponent({
  name: "StsModal",
  inheritAttrs: false,
  components: {
    AntModal: Modal,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
