<template>
  <app-config-provider>
    <router-view />
  </app-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppConfigProvider } from "/@/components/app-config-provider";

export default defineComponent({
  name: "",
  components: { AppConfigProvider },
  setup() {
    return {};
  },
});
</script>

<style lang="less"></style>
