<template>
  <sts-button type="primary">Primary</sts-button>
  <sts-button>secondary</sts-button>
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">1st item</a-menu-item>
        <a-menu-item key="2">2nd item</a-menu-item>
        <a-menu-item key="3">3rd item</a-menu-item>
      </a-menu>
    </template>
    <sts-button> Actions </sts-button>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StsButton from "/@/components/button";
import type { MenuProps } from "ant-design-vue";

export default defineComponent({
  name: "Basic",
  components: {
    StsButton,
  },
  setup() {
    const handleMenuClick: MenuProps["onClick"] = (e) => {
      console.log("click", e);
    };
    return {
      handleMenuClick,
    };
  },
});
</script>
