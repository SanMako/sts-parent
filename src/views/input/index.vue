<template>
  <div>
    <div class="row">
      <h3>基本用法</h3>
      <sts-input v-model:value="value" placeholder="基础输入框" />
    </div>
    <hr />
    <div class="row">
      <h3>前缀和后缀</h3>
      <sts-input v-model:value="userName" placeholder="Basic usage">
        <template #prefix><svg-icon name="user" /></template>
        <template #suffix><svg-icon name="info" /></template>
      </sts-input>
      <br />
      <br />
      <sts-input prefix="￥" suffix="RMB" />
    </div>
    <hr />
    <div class="row">
      <h3>搜索框loading</h3>
      <sts-input-search
        v-model:value="value"
        placeholder="input search loading deault"
        loading
      />
      <br />
      <br />
      <sts-input-search
        v-model:value="value"
        placeholder="input search loading with enterButton"
        loading
        enter-button
      />
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import StsInput from "/@/components/input";

export default defineComponent({
  name: "Input",
  components: {
    StsInput,
  },
  setup() {
    const value = ref<string>("");
    const userName = ref<string>("");

    return {
      value,
      userName,
    };
  },
});
</script>

<style lang="less">
.row {
  margin-bottom: 20px;
  width: 50%;
}
</style>
