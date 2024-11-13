<script setup lang="ts">
    const { data } = defineProps(['data'])
    if (!data) {
        throw new Error('新闻资讯楼层数据缺失')
    }
    const { name, categorys, resourceType, links } = data
    const infoCategoryArr = supplementaryData(categorys, 2)
    const infoLinkArr = supplementaryData(links, 3)
    const store = useResourceStore()
    const resourceList: any[] = store.resourceList
    const infoList = resourceList.filter(item => item.type === resourceType)
    const rightList = infoList.filter(item => item.floorType === '1').slice(0, 3)
    const topList = infoList.filter(item => item.floorType === '0').slice(0, 2)
    const bottomList = infoList.filter(item => item.floorType === '0').slice(2, 5)

    const mobileList: any[] = []
    for (let i = 0; i < 2; i++) {
        mobileList.push({
            categoryName: infoCategoryArr[i],
            topList: infoList.filter(item => item.floorType === `${i}`).slice(0, 2),
            bottomList: infoList.filter(item => item.floorType === `${i}`).slice(2, 4),
        })
    }
    const mobileActiveTab = ref('0')
</script>

<template>
  <div class="bg-[#F7FBFF] pc:bg-white" pt-15>
    <div floor-title>
      {{ name }}
    </div>
    <div my-4 block floor-mobile-link pc:hidden @click="jumpLink({ url: infoLinkArr[2] })">
      查看更多 >>
    </div>
    <div mx-auto my-10 hidden w-300 justify-between pc:flex>
      <div w-145>
        <div flex justify-between>
          <div text-5 font-bold lh-10>
            {{ infoCategoryArr[0] }}
          </div>
          <div cursor-pointer text-3.5 text-gray-6 lh-10 @click="jumpLink({ url: infoLinkArr[0] })">
            查看更多 >
          </div>
        </div>
        <div mt-6 h-40 w-full flex justify-between>
          <div v-for="(item, index) in topList" :key="index" relative h-full w-70 @click="jumpLink({ url: item.link })">
            <img :src="item.photo" absolute left-0 top-0 h-full w-full>
            <div absolute bottom-0 left-0 h-8 w-full pl-2 text-white lh-8 class="bg-black/60">
              {{ item.name }}
            </div>
          </div>
        </div>
        <div w-full>
          <div
            v-for="(item, index) in bottomList" :key="index" h-25 w-full
            cursor-pointer pt-8 @click="jumpLink({ url: item.link })"
          >
            <div flex justify-between>
              <div py-2>
                {{ item.name }}
              </div>
              <div text-3.5 text-gray-4>
                {{ dateFormat(item.updateTime) }}
              </div>
            </div>
            <div line-clamp-1 text-3.5 text-gray-5>
              {{ item.introduction }}
            </div>
          </div>
        </div>
      </div>
      <div w-145>
        <div flex justify-between>
          <div text-5 font-bold lh-10>
            {{ infoCategoryArr[1] }}
          </div>
          <div cursor-pointer text-3.5 text-gray-6 lh-10 @click="jumpLink({ url: infoLinkArr[1] })">
            查看更多 >
          </div>
        </div>
        <div mt-6 flex flex-col gap-4>
          <div v-for="(item, index) in rightList" :key="index" relative h-36 w-full>
            <img :src="item.photo" absolute left-0 top-0 h-full w-full>
            <div absolute left-0 top-0 line-clamp-2 z-2 h-full w-full text-center text-5 text-white font-bold lh-36 class="bg-black/50">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div mb-12 block w-full px-10 pc:hidden>
      <ElTabs v-model="mobileActiveTab" :stretch="true">
        <ElTabPane v-for="(item, index) in mobileList" :key="index" :label="item.categoryName">
          <div v-for="(top, topIdx) in item.topList" :key="topIdx" relative h-80 w-full gap-5>
            <img :src="top.photo" absolute left-0 top-0 z-1 h-full w-full>
            <div class="bg-black/50" absolute bottom-0 left-0 line-clamp-1 z-2 h-25 w-full text-center text-9 text-white font-bold lh-25>
              {{ top.name }}
            </div>
          </div>
          <div v-for="(bottom, bottomIdx) in item.bottomList" :key="bottomIdx" mt-12 flex justify-between>
            <div line-clamp-1 text-9 font-bold>
              {{ bottom.name }}
            </div>
            <div text-6>
              {{ dateFormat(bottom.updateTime) }}
            </div>
          </div>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>
