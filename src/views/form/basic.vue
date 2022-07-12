<template>
  <sts-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 4 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <sts-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <sts-input v-model:value="formState.username" />
    </sts-form-item>

    <sts-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <sts-input-password v-model:value="formState.password" />
    </sts-form-item>

    <sts-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </sts-form-item>

    <sts-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <sts-button type="primary" html-type="submit">Submit</sts-button>
    </sts-form-item>
  </sts-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { StsForm, StsFormItem } from "/@/components/form";
import { StsInput, StsInputPassword } from "/@/components/input";
import { StsButton } from "/@/components/button";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default defineComponent({
  name: "Basic",
  components: {
    StsForm,
    StsFormItem,
    StsInput,
    StsButton,
    StsInputPassword,
  },
  setup() {
    const formState = reactive<FormState>({
      username: "",
      password: "",
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>

<style lang="less"></style>
