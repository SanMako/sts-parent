<template>
  <h3>Block 按钮</h3>
  <div class="row">
    <sts-button class="row" type="primary" block>Primary</sts-button>
    <sts-button class="row" block>Default</sts-button>
    <sts-button class="row" type="dashed" block>Dashed</sts-button>
    <sts-button class="row" danger block>Danger</sts-button>
    <sts-button class="row" type="link" block>Link</sts-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StsButton from "/@/components/button";

export default defineComponent({
  name: "Block",
  components: {
    StsButton,
  },
  setup() {
    return {};
  },
});
</script>
