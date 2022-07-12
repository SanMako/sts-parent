<template>
  <h3>按钮类型</h3>
  <sts-button type="primary">Primary Button</sts-button>
  <sts-button>Default Button</sts-button>
  <sts-button type="dashed">Dashed Button</sts-button>
  <sts-button type="text">Text Button</sts-button>
  <sts-button type="link">Link Button</sts-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StsButton from "/@/components/button";

export default defineComponent({
  name: "Basic",
  components: {
    StsButton,
  },
  setup() {
    return {};
  },
});
</script>
