<template>
  <h3>图标按钮</h3>
  <div class="row">
    <sts-button type="primary" shape="circle">
      <template #icon><svg-icon name="search" /></template>
    </sts-button>
    <sts-button type="primary" shape="circle">A</sts-button>
    <sts-button type="primary">
      <template #icon><svg-icon name="search" /></template>
      Search
    </sts-button>
    <sts-button shape="circle">
      <template #icon><svg-icon name="search" /></template>
    </sts-button>
    <sts-button>
      <template #icon><svg-icon name="search" /></template>
      Search
    </sts-button>
    <sts-button shape="circle">
      <template #icon><svg-icon name="search" /></template>
    </sts-button>
    <sts-button>
      <template #icon><svg-icon name="search" /></template>
      Search
    </sts-button>
    <sts-button type="dashed" shape="circle">
      <template #icon><svg-icon name="search" /></template>
    </sts-button>
    <sts-button type="dashed">
      <template #icon><svg-icon name="search" /></template>
      Search
    </sts-button>
    <sts-button href="https://www.google.com">
      <template #icon><svg-icon name="search" /></template>
    </sts-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { StsButton } from "/@/components/button";

export default defineComponent({
  name: "Icon",
  components: {
    StsButton,
  },
  setup() {
    return {};
  },
});
</script>
