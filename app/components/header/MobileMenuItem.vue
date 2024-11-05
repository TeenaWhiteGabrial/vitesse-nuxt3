<script lang="ts" setup>
  import type { Column } from '~/types'

  const { content, active } = defineProps(['content', 'active'])
  const emit = defineEmits(['changeActiveItem'])
  const isTree = ['/product', '/solution', '/case'].includes(content.columnLink)
  /** 树状数据的一级栏目 */
  const activeChildIndex = ref(0)

  function changeActive(idx: number, content: Column[], isParentTree: boolean) {
    activeChildIndex.value = idx
    // 树状数据的一级栏目
    if (isParentTree && content[0]) {
      emit('changeActiveItem', _CloneDeep(content[0].child))
    }
    else {
      emit('changeActiveItem', _CloneDeep(content))
    }
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
        :class="{ 'font-bold color-activeColor': activeChildIndex === index }"
        @click="changeActive(index, item.child, false)"
      >
        {{ item.columnName }}
      </div>
    </div>
  </div>
</template>
