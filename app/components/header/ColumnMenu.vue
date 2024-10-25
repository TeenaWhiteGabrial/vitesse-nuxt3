<script setup lang="ts">
  let productList = []
  const productionRes: any = await getFetchData({
    url: '/gateway/portal/open/columns',
    opts: {},
  })
  if (productionRes.code === 200) {
    productList = productionRes.data
  }
</script>

<template>
  <div />
</template>
