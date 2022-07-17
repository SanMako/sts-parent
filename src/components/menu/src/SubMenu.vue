<template>
  <ant-sub-menu v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-sub-menu>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { SubMenu } from "ant-design-vue";

export default defineComponent({
  name: "StsSubMenu",
  components: {
    AntSubMenu: SubMenu,
  },
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
