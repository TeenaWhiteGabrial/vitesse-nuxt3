<script setup lang="ts">
const columnList = [
  {
    name: '首页',
    route: '/',
  },
  {
    name: '产品信息',
    route: '/',
  },
  {
    name: '了解我们',
    route: '/',
  },
  {
    name: '加入我们',
    route: '/',
  },
  {
    name: '新闻动态',
    route: '/',
  },
]
</script>

<template>
  <div
    position="fixed left-0 top-0 z-9999"
    flex="~ items-start justify-between"
    class="shadow-[5px_5px_25px_0px_#E4ECF3]"
    box-border h-16 w-full border-collapse overflow-hidden px-4
  >
    <a href="#" h-full flex items-center>
      <img
        src="/avatar002.png" class="h-12 w-12 text-6"
      >
    </a>

    <div flex="~ items-center justify-around" h-full w-128>
      <div v-for="(item, index) in columnList" :key="index">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
