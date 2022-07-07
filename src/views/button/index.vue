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
    <div class="row">
      <h3>加载中状态</h3>
      <sts-button type="primary" loading>Loading</sts-button>
      <sts-button type="primary" size="small" loading>Loading</sts-button>
      <sts-button
        type="primary"
        :loading="loading"
        @mouseenter="loading = true"
      >
        mouseenter me!
      </sts-button>
      <sts-button
        type="primary"
        :loading="iconLoading"
        @click="enterIconLoading"
      >
        <template #icon>
          <svg-icon
            :name="`loading-clock`"
            style="margin-right: 10px; vertical-align: -0.2em"
          />
        </template>
        延迟1s
      </sts-button>
      <sts-button type="primary" loading />
      <sts-button type="primary" shape="circle" loading />
      <sts-button danger shape="round" loading />
    </div>
    <hr />
    <div class="row">
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
        <sts-button size="default">Normal</sts-button>
        <sts-button type="dashed" size="default">Dashed</sts-button>
        <sts-button danger size="default">Danger</sts-button>
        <sts-button type="link" size="default">Link</sts-button>
        <sts-button type="primary" size="default">
          <template #icon><svg-icon name="download" /></template>
        </sts-button>
        <sts-button type="primary" shape="circle" size="default">
          <template #icon><svg-icon name="download" /></template>
        </sts-button>
        <sts-button type="primary" shape="round" size="default">
          <template #icon><svg-icon name="download" /></template>
          Download
        </sts-button>
        <sts-button type="primary" shape="round" size="default">
          <template #icon><svg-icon name="download" /></template>
        </sts-button>
        <sts-button type="primary" size="default">
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
    </div>
    <hr />
    <div class="row">
      <h3>危险按钮</h3>
      <div class="row">
        <sts-button type="primary" danger>Primary</sts-button>
        <sts-button danger>Default</sts-button>
        <sts-button type="dashed" danger>Dashed</sts-button>
        <sts-button type="text" danger>Text</sts-button>
        <sts-button type="link" danger>Link</sts-button>
      </div>
    </div>
    <hr />
    <div class="row">
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
    </div>
    <hr />
    <div class="row">
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
    </div>
    <hr />
    <div class="row">
      <h3>Block 按钮</h3>
      <div class="row">
        <sts-button class="row" type="primary" block>Primary</sts-button>
        <sts-button class="row" block>Default</sts-button>
        <sts-button class="row" type="dashed" block>Dashed</sts-button>
        <sts-button class="row" danger block>Danger</sts-button>
        <sts-button class="row" type="link" block>Link</sts-button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import StsButton from "/@/components/button";

interface DelayLoading {
  delay: number;
}

export default defineComponent({
  name: "Button",
  components: {
    StsButton,
  },
  setup() {
    const iconLoading = ref<boolean | DelayLoading>(false);
    const enterIconLoading = () => {
      iconLoading.value = { delay: 1000 };
      setTimeout(() => {
        iconLoading.value = false;
      }, 6000);
    };

    return {
      loading: ref(false),
      iconLoading,
      enterIconLoading,
    };
  },
});
</script>

<style lang="less">
.row {
  margin-bottom: 20px;

  .sts-btn {
    margin-left: 20px;
  }

  .inline-row {
    padding: 20px;
  }
}
</style>
