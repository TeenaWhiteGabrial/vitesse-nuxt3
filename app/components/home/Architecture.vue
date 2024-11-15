<script setup lang="ts">
  const { data } = defineProps(['data'])
  if (!data) {
    throw new Error('工字型图楼层数据缺失')
  }
  const { name, introduction, images } = data
  const architecture = supplementaryData(images, 1)[0]
</script>

<template>
  <div pt-18>
    <div floor-title>
      {{ name }}
    </div>
    <div floor-desc>
      {{ introduction }}
    </div>
    <video
      autoplay muted loop mx-auto my-20 h-120 w-200 object-cover
    >
      <source :src="architecture.url">
    </video>
  </div>
</template>
