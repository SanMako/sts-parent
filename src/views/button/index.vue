<template>
  <div>
    <div class="row">
      <h3>按钮类型</h3>
      <sts-button type="primary">Primary Button</sts-button>
      <sts-button>Default Button</sts-button>
      <sts-button type="dashed">Dashed Button</sts-button>
      <sts-button type="text">Text Button</sts-button>
      <sts-button type="link">Link Button</sts-button>
    </div>
    <hr />
    <div class="row">
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
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StsButton from "/@/components/button";

export default defineComponent({
  name: "Button",
  components: {
    StsButton,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.row {
  margin-bottom: 20px;

  .sts-btn {
    margin-right: 20px;
  }
}
</style>
