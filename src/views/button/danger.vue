<template>
  <h3>危险按钮</h3>
  <div class="row">
    <sts-button type="primary" danger>Primary</sts-button>
    <sts-button danger>Default</sts-button>
    <sts-button type="dashed" danger>Dashed</sts-button>
    <sts-button type="text" danger>Text</sts-button>
    <sts-button type="link" danger>Link</sts-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StsButton } from "/@/components/button";

export default defineComponent({
  name: "Danger",
  components: {
    StsButton,
  },
  setup() {
    return {};
  },
});
</script>
