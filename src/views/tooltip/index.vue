<template>
  <div>
    <div class="row">
      <h3>基本用法</h3>
      <sts-tooltip>
        <template #title>prompt text</template>
        Tooltip will show when mouse enter.
      </sts-tooltip>
    </div>
    <hr />
    <div class="row">
      <h3>基本用法</h3>
      <a-tooltip>
        <template #title>prompt text</template>
        Tooltip will show when mouse enter.
      </a-tooltip>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StsTooltip from "/@/components/tooltip";
import ATooltip from "/@/components/ant/tooltip";

export default defineComponent({
  name: "ToolTip",
  components: {
    StsTooltip,
    ATooltip,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.row {
  margin-bottom: 20px;
}
</style>
