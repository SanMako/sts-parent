<template>
  <h3>不可用状态</h3>
  <div class="row">
    <div class="inline-row">
      正常状态
      <sts-button type="primary">Primary</sts-button>
      <sts-button>Default</sts-button>
      <sts-button type="dashed">Dashed</sts-button>
      <sts-button type="text">Text</sts-button>
      <sts-button type="link">Link</sts-button>
      <sts-button danger>Danger Default</sts-button>
      <sts-button type="text" danger>Danger Text</sts-button>
      <sts-button type="link" danger>Danger Link</sts-button>
      <div
        :style="{
          padding: '8px 8px 0 8px',
          background: 'rgb(190, 200, 200)',
          display: 'inline-block',
        }"
      >
        <sts-button ghost>Ghost</sts-button>
      </div>
    </div>
    <div class="inline-row">
      不可用状态
      <sts-button type="primary" disabled>Primary</sts-button>
      <sts-button disabled>Default</sts-button>
      <sts-button type="dashed" disabled>Dashed</sts-button>
      <sts-button type="text" disabled>Text</sts-button>
      <sts-button type="link" disabled>Link</sts-button>
      <sts-button danger disabled>Danger Default</sts-button>
      <sts-button type="text" danger disabled> Danger Text </sts-button>
      <sts-button type="link" danger disabled> Danger Link </sts-button>
      <div
        :style="{
          padding: '8px 8px 0 8px',
          background: 'rgb(190, 200, 200)',
          display: 'inline-block',
        }"
      >
        <sts-button ghost disabled>Ghost</sts-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StsButton from "/@/components/button";

export default defineComponent({
  name: "Disabled",
  components: {
    StsButton,
  },
  setup() {
    return {};
  },
});
</script>
