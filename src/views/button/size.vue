<template>
  <h3>按钮尺寸</h3>
  <div class="inline-row">
    大
    <sts-button type="primary" size="large">Primary</sts-button>
    <sts-button size="large">Normal</sts-button>
    <sts-button type="dashed" size="large">Dashed</sts-button>
    <sts-button danger size="large">Danger</sts-button>
    <sts-button type="link" size="large">Link</sts-button>
    <sts-button type="primary" size="large">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" shape="circle" size="large">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" shape="round" size="large">
      <template #icon><svg-icon name="download" /></template>
      Download
    </sts-button>
    <sts-button type="primary" shape="round" size="large">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" size="large">
      <template #icon><svg-icon name="download" /></template>
      Download
    </sts-button>
  </div>
  <div class="inline-row">
    中
    <sts-button type="primary" size="default">Primary</sts-button>
    <sts-button>Normal</sts-button>
    <sts-button type="dashed">Dashed</sts-button>
    <sts-button danger>Danger</sts-button>
    <sts-button type="link">Link</sts-button>
    <sts-button type="primary">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" shape="circle">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" shape="round">
      <template #icon><svg-icon name="download" /></template>
      Download
    </sts-button>
    <sts-button type="primary" shape="round">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary">
      <template #icon><svg-icon name="download" /></template>
      Download
    </sts-button>
  </div>
  <div class="inline-row">
    小
    <sts-button type="primary" size="small">Primary</sts-button>
    <sts-button size="small">Normal</sts-button>
    <sts-button type="dashed" size="small">Dashed</sts-button>
    <sts-button danger size="small">Danger</sts-button>
    <sts-button type="link" size="small">Link</sts-button>
    <sts-button type="primary" size="small">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" shape="circle" size="small">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" shape="round" size="small">
      <template #icon><svg-icon name="download" /></template>
      Download
    </sts-button>
    <sts-button type="primary" shape="round" size="small">
      <template #icon><svg-icon name="download" /></template>
    </sts-button>
    <sts-button type="primary" size="small">
      <template #icon><svg-icon name="download" /></template>
      Download
    </sts-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StsButton } from "/@/components/button";

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
