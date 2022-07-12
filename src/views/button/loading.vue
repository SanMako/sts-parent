<template>
  <h3>加载中状态</h3>
  <sts-button type="primary" loading>Loading</sts-button>
  <sts-button type="primary" size="small" loading>Loading</sts-button>
  <sts-button type="primary" :loading="loading" @mouseenter="loading = true">
    mouseenter me!
  </sts-button>
  <sts-button type="primary" :loading="iconLoading" @click="enterIconLoading">
    <template #icon>
      <svg-icon :name="`loading-clock`" style="vertical-align: -0.2em" />
    </template>
    延迟1s
  </sts-button>
  <sts-button type="primary" loading />
  <sts-button type="primary" shape="circle" loading />
  <sts-button danger shape="round" loading />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { StsButton } from "/@/components/button";

interface DelayLoading {
  delay: number;
}

export default defineComponent({
  name: "Loading",
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
