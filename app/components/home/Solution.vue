<script setup lang="ts">
    const { data } = defineProps(['data'])
    if (!data) {
        throw new Error('解决方案楼层数据缺失')
    }
    const { name, introduction, categorys, links, descriptions, images } = data
    const activeName = ref('0')

    const solutionCategory = supplementaryData(categorys, 2)
    const solutionLinks = supplementaryData(links, 16)
    const solutionDescs = supplementaryData(descriptions, 16)
    const solutionImages = supplementaryData(images, 16)

    const showData: any[] = []
    for (let i = 0; i < 2; i++) {
        const child = []
        for (let j = 0; j < 8; j++) {
            child.push({
                name: solutionDescs[i * 8 + j],
                link: solutionLinks[i * 8 + j],
                image: solutionImages[i * 8 + j].url,
            })
        }
        showData.push({
            name: solutionCategory[i],
            child,
        })
    }
</script>

<template>
  <div pt-15>
    <div floor-title>
      {{ name }}
    </div>
    <div floor-desc>
      {{ introduction }}
    </div>
    <div class="mx-auto my-7 max-w-300 w-full">
      <ElTabs v-model="activeName" :stretch="true">
        <ElTabPane v-for="(category, index) in showData" :key="index" :label="category.name" :name="`${index}`">
          <div flex flex-wrap justify-center gap-10 pc:gap-4>
            <div
              v-for="item in category.child" :key="item.id"
              relative h-88.7 w-100 cursor-pointer pc:h-61.8 pc:w-71 class="group" @click="jumpLink({ url: item.link })"
            >
              <img :src="item.image" absolute left-0 top-0 z-0 h-full w-full rounded-md object-cover>
              <div absolute bottom-5 left-5 z-3 text-10 text-white font-bold group-hover:bottom-15 pc:text-5>
                {{ item.name }}
              </div>
              <div absolute bottom-5 left-5 z-4 hidden text-white group-hover:block>
                查看更多 >>
              </div>
              <div class="bg-sky-700/50" absolute left-0 top-0 z-1 hidden h-full w-full rounded-md group-hover:block />
            </div>
          </div>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>
