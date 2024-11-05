<script lang="ts" setup>
  const { content, isTree } = defineProps(['content', 'isTree'])
  const activeName = ref('0')
</script>

<template>
  <div v-if="isTree" pt-4>
    <ElCollapse v-model="activeName" ml-10>
      <ElCollapseItem v-for="(category, index) in content" :key="category.id" :title="category.columnName" :name="`${index}`">
        <div v-for="item in category.child" :key="item.id" text-left font-bold @click="jumpLink({ url: item.columnLink })">
          {{ item.columnName }}
        </div>
      </ElCollapseItem>
    </ElCollapse>
  </div>
  <div v-else pt-4>
    <div v-for="item in content" :key="item.id" mb-4 ml-10 text-left font-bold @click="jumpLink({ url: item.columnLink })">
      {{ item.columnName }}
    </div>
  </div>
</template>

<style scoped>
  :deep(.el-collapse-item__header) {
    font-weight: bold;
  }

  :deep(.is-active) {
    color: #0e6dff;
  }
</style>
