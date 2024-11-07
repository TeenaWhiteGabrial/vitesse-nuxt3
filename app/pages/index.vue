<script setup lang="ts">
  definePageMeta({
    layout: 'home',
  })
  const content = useContentStore()
  await callOnce(content.fetch)

  const resource = useResourceStore()
  await callOnce(resource.getResourceList)

  const floorList = content.floorList
  const architectureData = floorList.find(item => item.code === '001') || {}
  const productData = floorList.find(item => item.code === '002') || {}
</script>

<template>
  <div m-t-total-header flex flex-col>
    <HomeBanner -order-2 />
    <HomePoints -order-1 />
    <HomeArchitecture v-if="architectureData.isShow === '1'" :data="architectureData" :style="`order:${architectureData.sequence || 999}`" />
    <HomeProduct v-if="productData.isShow === '1'" :data="productData" :style="`order:${productData.sequence || 999}`" />
  </div>
</template>
