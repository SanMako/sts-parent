<template>
  <ant-textarea v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-textarea>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Textarea } from "ant-design-vue";

export default defineComponent({
  name: "StsTextarea",
  inheritAttrs: false,
  components: {
    AntTextarea: Textarea,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
