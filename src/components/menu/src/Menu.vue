<template>
  <ant-menu v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-menu>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Menu } from "ant-design-vue";

export default defineComponent({
  name: "StsMenu",
  components: {
    AntMenu: Menu,
  },
  Item: Menu.Item,
  SubMenu: Menu.SubMenu,
  Divider: Menu.Divider,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
