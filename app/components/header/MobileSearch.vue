<script lang="ts" setup>
  const searchText = ref('')
</script>

<template>
  <div h-full flex flex-1 items-center pc:hidden>
    <ElInput v-model="searchText" placeholder="请输入您要搜索的内容" :prefix-icon="ElIconSearch" />
  </div>
</template>

<style lang="css" scoped>
  :deep(.el-input__wrapper) {
    border-radius: 5rem;
  }
</style>
