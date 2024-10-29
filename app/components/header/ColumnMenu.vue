<script setup lang="ts">
  const resource = useResourceStore()
  await callOnce(resource.getResourceList)
  await callOnce(resource.getProductionTree)
  await callOnce(resource.getSolutionTree)
  await callOnce(resource.getCaseTree)
</script>

<template>
  <div />
</template>
