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
  const serviceData = floorList.find(item => item.code === '003') || {}
  const solutionData = floorList.find(item => item.code === '004') || {}
  const platformData = floorList.find(item => item.code === '005') || {}
  const caseData = floorList.find(item => item.code === '006') || {}
  const ecologyData = floorList.find(item => item.code === '007') || {}
  const infoData = floorList.find(item => item.code === '008') || {}
  const internationalizationData = floorList.find(item => item.code === '009')
</script>

<template>
  <div m-t-total-header flex flex-col font-yahei>
    <HomeBanner -order-2 />
    <HomePoints -order-1 />
    <HomeArchitecture v-if="architectureData.isShow === '1'" :data="architectureData" :style="`order:${architectureData.sequence || 999}`" />
    <HomeProduct v-if="productData.isShow === '1'" :data="productData" :style="`order:${productData.sequence || 999}`" />
    <HomeService v-if="serviceData.isShow === '1'" :data="serviceData" :style="`order:${serviceData.sequence || 999}`" />
    <HomeSolution v-if="solutionData.isShow === '1'" :data="solutionData" :style="`order:${solutionData.sequence || 999}`" />
    <HomePlatform v-if="platformData.isShow === '1'" :data="platformData" :style="`order:${platformData.sequence || 999}`" />
    <HomeCase v-if="caseData.isShow === '1'" :data="caseData" :style="`order:${caseData.sequence || 999}`" />
    <HomeEcology v-if="ecologyData.isShow === '1'" :data="ecologyData" :style="`order:${ecologyData.sequence || 999}`" />
    <HomeInformation v-if="infoData.isShow === '1'" :data="infoData" :style="`order:${infoData.sequence || 999}`" />
    <HomeInternationalization v-if="internationalizationData.isShow === '1'" :data="internationalizationData" :style="`order:${internationalizationData.sequence || 999}`" />
  </div>
</template>
