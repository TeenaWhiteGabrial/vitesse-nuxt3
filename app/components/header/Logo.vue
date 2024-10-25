<script setup lang="ts">
  const { logo, mobileLogo } = useWebsiteStore()
</script>

<template>
  <div h-full px-4 flex="~ items-center">
    <!-- mobileLogo用于通用显示，logo用于大屏幕显示 -->
    <img :src="mobileLogo" block h-8 pc:hidden>
    <img :src="logo" hidden h-8 pc:block>
  </div>
</template>
