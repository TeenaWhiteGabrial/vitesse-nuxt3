<script setup lang="ts">
  import type { TabPaneName } from 'element-plus'

  const { data } = defineProps(['data'])
  if (!data) {
    throw new Error('应用案例楼层数据缺失')
  }
  const { name, categorys, resourceType } = data

  const store = useResourceStore()
  const resourceList: any[] = store.resourceList
  const caseData = resourceList.filter(item => item.type === resourceType)

  // const moreLink = supplementaryData(links, 1)[0] // 查看更多
  const caseCategorys = supplementaryData(categorys, 2).splice(0, 2) // 应用案例类别，最多限制2个
  const showData: any[] = []
  for (let i = 0; i < 2; i++) {
    showData.push({
      category_name: caseCategorys[i],
      child: caseData.filter(item => item.floorType === `${i}`).splice(0, 9),
    })
  }

  const activeName = ref(0)
  const activeChildIndex = ref(0)

  function changeActiveData(name: TabPaneName) {
    if (typeof name === 'string') {
      activeChildIndex.value = Number.parseInt(name)
    }
    else {
      activeChildIndex.value = name
    }
  }
  function changeActiveChild(index: number) {
    activeChildIndex.value = index
  }
</script>

<template>
  <div>
    <div hidden w-full pc:block class="pc">
      <div class="mb-10 floor-title">
        {{ name }}
      </div>
      <ElTabs v-model="activeName" :stretch="true" @tab-change="changeActiveData">
        <ElTabPane v-for="(item, index) in showData" :key="index" :label="item.category_name" :name="index">
          <div h-80 w-full flex class="bg-[#0060B2]">
            <img :src="showData[activeName].child[activeChildIndex].photo" class="h-full w-1/2" object-cover>
            <div class="h-full w-1/2" p-10>
              <div flex gap-6>
                <img
                  v-for="(child, childIdx) in item.child" :key="child.id" :src="child.photo"
                  :class="[{ 'border-3': childIdx === activeChildIndex }]"
                  h-8 w-8 cursor-pointer border-light rounded-2xl object-cover
                  @click="changeActiveChild(childIdx)"
                >
              </div>
              <div line-clamp-1 my-8 text-5 text-white font-bold>
                {{ showData[activeName].child[activeChildIndex].name }}
              </div>
              <div line-clamp-2 text-3.5 text-white>
                {{ showData[activeName].child[activeChildIndex].introduction }}
              </div>
              <div mt-8 btn-transparent>
                了解详情
              </div>
            </div>
          </div>
        </eltabpane>
      </eltabs>
    </div>
    <div block w-full px-10 pb-20 pc:hidden class="mobile bg-[#0060B2] pt-10">
      <div class="floor-title text-white">
        {{ name }}
      </div>
      <div my-10 text-center text-white>
        查看更多>>
      </div>
      <ElTabs v-model="activeName" :stretch="true" @tab-change="changeActiveData">
        <ElTabPane v-for="(item, index) in showData" :key="index" :label="item.category_name" :name="index">
          <ElCarousel height="28rem" :autoplay="false" indicator-position="outside" arrow="never">
            <ElCarouselItem v-for="child in item.child" :key="child.id">
              <img :src="child.photo" class="h-56 w-full" object-cover>
              <div h-56 bg-white p-10>
                <div class="text-[#0060B2] font-bold">
                  {{ child.name }}
                </div>
                <div line-clamp-4 mt5>
                  {{ child.introduction }}
                </div>
              </div>
            </ElCarouselItem>
          </ElCarousel>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>

<style scoped>
  :deep(.pc .el-tabs__header) {
    width: 1000px;
    margin-left: calc(50% - 500px);
  }

  :deep(.mobile .el-carousel__indicator.is-active button) {
    background-color: #FFE170;
  }

  :deep(.mobile .el-tabs__item) {
    color: #fff;

  }

  :deep(.mobile .el-tabs__item.is-active, .mobile .el-tabs__item:hover) {
    color: #FFE170;
  }

  :deep(.mobile .el-tabs__active-bar) {
    background-color: #FFE170;
  }

  /* :deep(.el-tabs__active-bar) {
    height: 4px;
  } */
</style>
