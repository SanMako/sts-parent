<template>
  <ant-dropdown v-bind="getBindValue">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
  </ant-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import { Dropdown } from "ant-design-vue";
import StsDropdownButton from "./DropdownButton.vue";

export default defineComponent({
  name: "StsDropdown",
  components: {
    AntDropdown: Dropdown,
  },
  Button: StsDropdownButton,
  setup(props, { attrs }) {
    const getBindValue = computed(() => ({ ...unref(attrs), ...unref(props) }));

    return { getBindValue };
  },
});
</script>

<style lang="less"></style>
