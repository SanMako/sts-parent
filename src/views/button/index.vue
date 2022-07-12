<template>
  <div>
    <div class="row"><basic /></div>
    <hr />
    <div class="row"><disabled /></div>
    <hr />
    <div class="row"><ghost /></div>
    <hr />
    <div class="row"><icon /></div>
    <hr />
    <div class="row"><loading /></div>
    <hr />
    <div class="row"><multiple /></div>
    <hr />
    <div class="row"><size /></div>
    <hr />
    <div class="row"><block /></div>
    <hr />
    <div class="row"><danger /></div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import StsButton from "/@/components/button";
import Basic from "./basic.vue";
import Disabled from "./disabled.vue";
import Ghost from "./ghost.vue";
import Icon from "./icon.vue";
import Loading from "./loading.vue";
import Multiple from "./multiple.vue";
import Size from "./size.vue";
import Block from "./block.vue";
import Danger from "./danger.vue";

interface DelayLoading {
  delay: number;
}

export default defineComponent({
  name: "Button",
  components: {
    StsButton,
    Basic,
    Disabled,
    Ghost,
    Icon,
    Loading,
    Multiple,
    Size,
    Block,
    Danger,
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

  .ant-btn {
    margin-left: 20px;
  }

  .inline-row {
    padding: 20px;
  }
}
</style>
