<script setup lang="ts">
  import { useStorage } from '@vueuse/core' // 本地存储
  import type { Column, Resource, ResourceCategory, ResourceMultiCategory } from '~/types'

  /** 菜单展开 */
  const spread = ref(false)
  function reversalSpread() {
    spread.value = !spread.value
  }

  /** 资源树 */
  const resource = useResourceStore()
  const { productionTree, solutionTree, caseTree } = resource

  /** 整合栏目信息，考虑使用缓存机制 */
  const columnList: Column[] = _CloneDeep(useColumnStore().columnList)

  /** 处理树状数据，时间复杂度为O(n³) */
  const productChildList: Column[] = []
  productionTree.forEach((multicategory: ResourceMultiCategory) => {
    const categoryList: Column[] = []
    multicategory.multicategoryList.forEach((category: ResourceCategory) => {
      const unitList: Column[] = []
      category.unitList.forEach((unit: Resource) => {
        unitList.push({
          id: unit.id,
          sequence: unit.sequence,
          isShow: 1,
          columnName: unit.name,
          columnLink: unit.link,
          child: [],
        })
      })
      categoryList.push({
        id: category.categoryId,
        sequence: 0,
        isShow: 1,
        columnName: category.categoryName,
        columnLink: '',
        child: unitList,
      })
    })
    productChildList.push({
      id: multicategory.multicategoryType,
      sequence: 0,
      isShow: 1,
      columnName: multicategory.name,
      columnLink: '',
      child: categoryList,
    })
  })

  const solutionChildList: Column[] = []
  solutionTree.forEach((multicategory: ResourceMultiCategory) => {
    const categoryList: Column[] = []
    multicategory.multicategoryList.forEach((category: ResourceCategory) => {
      const unitList: Column[] = []
      category.unitList.forEach((unit: Resource) => {
        unitList.push({
          id: unit.id,
          sequence: unit.sequence,
          isShow: 1,
          columnName: unit.name,
          columnLink: unit.link,
          child: [],
        })
      })
      categoryList.push({
        id: category.categoryId,
        sequence: 0,
        isShow: 1,
        columnName: category.categoryName,
        columnLink: '',
        child: unitList,
      })
    })
    solutionChildList.push({
      id: multicategory.multicategoryType,
      sequence: 0,
      isShow: 1,
      columnName: multicategory.name,
      columnLink: '',
      child: categoryList,
    })
  })

  const caseChildList: Column[] = []
  caseTree.forEach((multicategory: ResourceMultiCategory) => {
    const categoryList: Column[] = []
    multicategory.multicategoryList.forEach((category: ResourceCategory) => {
      const unitList: Column[] = []
      category.unitList.forEach((unit: Resource) => {
        unitList.push({
          id: unit.id,
          sequence: unit.sequence,
          isShow: 1,
          columnName: unit.name,
          columnLink: unit.link,
          child: [],
        })
      })
      categoryList.push({
        id: category.categoryId,
        sequence: 0,
        isShow: 1,
        columnName: category.categoryName,
        columnLink: '',
        child: unitList,
      })
    })
    caseChildList.push({
      id: multicategory.multicategoryType,
      sequence: 0,
      isShow: 1,
      columnName: multicategory.name,
      columnLink: '',
      child: categoryList,
    })
  })
  columnList.forEach((column) => {
    if (column.columnLink === '/product') {
      column.child = productChildList
    }
    else if (column.columnLink === '/solution') {
      column.child = solutionChildList
    }
    else if (column.columnLink === '/case') {
      column.child = caseChildList
    }
  })

  function isTree(path: string | undefined) {
    if (!path) {
      return false
    }
    const treeList = ['/product', '/solution', '/case']
    return treeList.includes(path)
  }

  const activeIndex = ref(0)
  const activeLink = ref(columnList[0]?.columnLink)
  const activeContent: any = ref(null)

  /** 初次加载时content赋值 */
  if (isTree(activeLink.value) && columnList[0]?.child) {
    activeContent.value = columnList[0]?.child[0]?.child
  }
  else {
    activeContent.value = columnList[0]?.child
  }
  /** 一级栏目 */
  function changeActiveItem(index: number, item: Column) {
    activeIndex.value = index
    activeLink.value = item.columnLink
  }

  /** 二级栏目 */
  function changeActiveContent(content: Column[]) {
    activeContent.value = content
  }
</script>

<template>
  <div relative mx-5 h-full flex items-center pc:hidden class="group">
    <Icon
      :name="spread ? 'i-line-md:menu-to-close-transition' : 'i-ooui:menu'" size="32"
      flex cursor-pointer items-center @click="reversalSpread"
    />
    <div class="fixed left-0 top-total-header h-full w-full overflow-y-auto b-t-2 b-t-coolgray" :class="spread ? 'flex' : 'hidden'">
      <div class="w-12/31 b-r-1 b-r-bluegray bg-white pt-2">
        <HeaderMobileMenuItem
          v-for="(item, index) in columnList" :key="item.id"
          :active="activeIndex === index" :content="item"
          @click="changeActiveItem(index, item)"
          @change-content="changeActiveContent"
        />
      </div>
      <HeaderMobileMenuContent flex-1 bg-white :is-tree="isTree(activeLink)" :content="activeContent" />
    </div>
  </div>
</template>
