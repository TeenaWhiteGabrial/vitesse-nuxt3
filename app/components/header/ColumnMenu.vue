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

  function changeActiveIndex(idx: number) {
    activeIndex.value = idx
    activeUnitList.value = unitList.value[activeIndex.value].multicategoryList
  }
</script>

<template>
  <div id="unit-menu" fixed left-0 top-total-header h-140 w-full flex bg-white shadow-inner>
    <div class="w-11/48 flex flex-row-reverse">
      <div border-r-0.25 border-r-slate-400 pr-5 pt-5>
        <ElInput v-model="searchText" :suffix-icon="ElIconSearch" :placeholder="`搜索${textFlag}`" class="pb-3" />
        <div
          v-for="(item, index) in unitList" :key="item.multicategoryType"
          :class="[{ 'color-activeColor border-r-activeColor border-r-3': index === activeIndex }]"
          h-12 text-left text-3 font-bold lh-12
          @mouseenter="changeActiveIndex(index)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="flex flex-1 gap-4 p-8.75">
      <div v-for="(item, idx) in activeUnitList" :key="idx" class="w-1/3">
        <div pb-1 text-left text-3 font-bold>
          {{ item.categoryName }}
        </div>
        <div v-for="(unit, index) in item.unitList" :key="index" hover:color-activeColor pt-2 text-left text-3 @click="jumpLink(unit.link)">
          {{ unit.name }}
        </div>
      </div>
    </div>
  </div>
  <div mask />
</template>
