<template>
  <h3>幽灵按钮</h3>
  <div
    class="row"
    :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }"
  >
    <sts-button type="primary" ghost>Primary</sts-button>
    <sts-button ghost>Default</sts-button>
    <sts-button type="dashed" ghost>Dashed</sts-button>
    <sts-button type="primary" danger ghost>Danger</sts-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StsButton } from "/@/components/button";

export default defineComponent({
  name: "Ghost",
  components: {
    StsButton,
  },
  setup() {
    return {};
  },
});
</script>
