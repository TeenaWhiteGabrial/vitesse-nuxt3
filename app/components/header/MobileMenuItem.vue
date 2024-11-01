<script lang="ts" setup>
  import type { Column } from '~/types'

  const { content, active } = defineProps(['content', 'active'])
  const emit = defineEmits(['changeContent'])
  const isTree = ['/product', '/solution', '/case'].includes(content.columnLink)
  const activeIndex = ref(0)
  function changeActive(idx: number, content: Column, isParentTree: boolean) {
    if (isParentTree) {
      return
    }
    activeIndex.value = idx
    emit('changeContent', _CloneDeep(content))
  }
</script>

<template>
  <div>
    <div
      :class="{ 'font-bold color-activeColor b-l-activeColor b-l-4': active }" my-3 pl-4 text-left
      @click="changeActive(0, content.child, isTree)"
    >
      {{ content.columnName }}
    </div>
    <div :class="isTree && active ? 'block' : 'hidden'" w-full class="bg-[#F7FBFF]">
      <div
        v-for="(item, index) in content.child" :key="item.id" py-2 pl-4 text-left
        :class="{ 'font-bold color-activeColor': activeIndex === index }"
        @click="changeActive(index, item.child, false)"
      >
        {{ item.columnName }}
      </div>
    </div>
  </div>
</template>
