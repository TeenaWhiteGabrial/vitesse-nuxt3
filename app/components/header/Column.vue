<script lang="ts" setup>
  /** 栏目 */
  interface Column {
    id: string
    sequence: number
    isShow: number
    child: Column[]
    columnName: string
    columnLink: string
  }
  let columnList: any[] = []
  const resData: any = await useCustomFetch('/gateway/portal/open/columns')
  if (resData.code === 200) {
    resData.data.sort((a: Column, b: Column) => {
      return a.sequence - b.sequence
    })
    columnList = resData.data
  }
</script>

<template>
  <div class="ml-10 hidden h-column-height flex-1 pc:flex">
    <div v-for="item in columnList" :key="item.id" class="group relative h-column-height cursor-pointer">
      <div
        class="mr-4 box-border b-linkColor lh-column-height group-hover:border-b-8 group-hover:font-bold"
        @click="jumpLink(item.columnLink)"
      >
        {{ item.columnName }}
      </div>
      <div class="fixed hidden bg-white -ml-4 -mt-1 group-hover:block">
        <div
          v-for="child in item.child" :key="child.id"
          class="mx-4 mb-0 mt-2 h-8 b-linkColor text-start hover:border-b-2 hover:font-bold"
          @click="jumpLink(child.columnLink)"
        >
          {{ child.columnName }}
        </div>
      </div>
      <div />
    </div>
  </div>
</template>
