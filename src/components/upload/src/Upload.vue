<template>
  <ant-upload v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-upload>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Upload } from "ant-design-vue";

export default defineComponent({
  name: "StsUpload",
  inheritAttrs: false,
  components: {
    AntUpload: Upload,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
