<script lang="ts" setup>
  /** 栏目 */
  import type { Column } from '~/types'

  const { columnList }: { columnList: Column[] } = useColumnStore()
  const actiColumnId = ref('')
  /** 有子栏目时，不跳转 */
  function columnJump(link: string, hasChild: boolean) {
    if (hasChild) {
      return
    }
    jumpLink({ url: link })
  }
  /** 判断是否需要下拉菜单 */
  function hasMenu(path: string) {
    const menuFlag = ['/product', '/case', '/solution']
    if (menuFlag.includes(path)) {
      return true
    }
    return false
  }
  /** 当前栏目 */
  function changeActiveColumn(id: string) {
    actiColumnId.value = id
  }
</script>

<template>
  <div class="ml-10 hidden h-column-height flex-1 pc:flex">
    <div
      v-for="item in columnList" :key="item.id"
      class="group relative h-column-height cursor-pointer"
      @mouseenter="changeActiveColumn(item.id)"
      @mouseleave="changeActiveColumn('')"
    >
      <div
        class="mr-4 box-border b-linkColor lh-column-height group-hover:font-bold" :class="[{ 'border-b-8': actiColumnId === item.id }]"
        @click="columnJump(item.columnLink, item.child.length > 0)"
      >
        {{ item.columnName }}
      </div>
      <div class="fixed bg-white -ml-4 -mt-1" :class="[actiColumnId === item.id ? 'block' : 'hidden']">
        <HeaderColumnMenu v-if="hasMenu(item.columnLink)" :flag="item.columnLink" @close-menu="changeActiveColumn('')" />
        <div v-else>
          <div
            v-for="child in item.child" :key="child.id"
            class="mx-4 mb-0 mt-2 h-8 b-linkColor text-start hover:border-b-2 hover:font-bold"
            @click="jumpLink({ url: child.columnLink })"
          >
            {{ child.columnName }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
