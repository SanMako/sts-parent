<template>
  <ant-menu-divider v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-menu-divider>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { MenuDivider } from "ant-design-vue";

export default defineComponent({
  name: "StsMenuDivider",
  components: {
    AntMenuDivider: MenuDivider,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
