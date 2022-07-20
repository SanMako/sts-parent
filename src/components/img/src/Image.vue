<template>
  <ant-image v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-image>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Image } from "ant-design-vue";

export default defineComponent({
  name: "StsImg",
  inheritAttrs: false,
  components: {
    AntImage: Image,
  },
  // props: buttonProps,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
