<script setup lang="ts">
  const { flag } = defineProps(['flag'])
  const resource = useResourceStore()
  await callOnce(resource.getProductionTree)
  await callOnce(resource.getSolutionTree)
  await callOnce(resource.getCaseTree)

  const unitList: any = ref([])
  const textFlag = ref('')
  switch (flag) {
    case '/product': unitList.value = resource.productionTree; textFlag.value = '产品与服务'; break
    case '/solution': unitList.value = resource.solutionTree; textFlag.value = '解决方案'; break
    case '/case': unitList.value = resource.caseTree; textFlag.value = '应用案例'; break
  }
  const activeIndex = ref(0)
  const activeUnitList = ref(unitList.value[activeIndex.value].multicategoryList)

  const searchText = ref('')
</script>

<template>
  <div fixed left-0 top-total-header h-140 w-full flex bg-white shadow-inner>
    <div class="w-11/48" border-r-0.25 border-r-slate-400 p-y-6 p-l-20>
      <ElInput />
      <div v-for="item in unitList" :key="item.multicategoryType">
        {{ item.name }}
      </div>
    </div>
    <div flex-1>
      <div v-for="item in activeUnitList" :key="item.categoryId">
        {{ item.categoryName }}
      </div>
    </div>
  </div>
  <div mask />
</template>
