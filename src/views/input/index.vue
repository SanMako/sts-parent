<template>
  <div class="container">
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
      <br />
      <br />
    </div>
    <hr />
    <div class="row">
      <h3>搜索框loading</h3>
      <sts-input-search
        v-model:value="value"
        placeholder="input search loading deault"
        loading
      ></sts-input-search>
      <br />
      <br />
      <sts-input-search
        v-model:value="value"
        placeholder="input search loading with enterButton"
        loading
        enter-button
      />
      <br />
      <br />
      <a-input-search
        v-model:value="value"
        placeholder="input search loading deault"
        loading
      />
      <br />
      <br />
      <a-input-search
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
import { StsInput, StsInputSearch } from "/@/components/input";

export default defineComponent({
  name: "Input",
  components: {
    StsInput,
    StsInputSearch,
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
.container {
  left: 10px;
}
.row {
  margin-bottom: 20px;
  width: 50%;
}
</style>
