<script lang="ts" setup>
  const { data } = defineProps(['data'])
  if (!data) {
    throw new Error('产品与服务楼层数据缺失')
  }
  const { name, introduction, resourceType, categorys, links } = data
  const moreLink = supplementaryData(links, 1)[0] // 查看更多产品链接
  const productCategory = supplementaryData(categorys, 1)
  const store = useResourceStore()
  const resource: any[] = store.resourceList
  const productData = resource.filter(item => item.type === resourceType)
  const showData: any[] = []
  const categoryLen = productCategory.length
  for (let i = 0; i < categoryLen; i++) {
    const item = {
      category_name: productCategory[i],
      child: productData.filter(item => item.floorType === `${i}`).splice(0, 6),
    }
    showData.push(item)
  }

  const activeName = ref('0')
</script>

<template>
  <div bg-gray-100 py-10>
    <div floor-title>
      {{ name }}
    </div>
    <div floor-desc hidden pc:block>
      {{ introduction }}
    </div>
    <div class="mx-auto my-7 w-300" hidden pc:block>
      <ElTabs v-model="activeName" :stretch="true">
        <ElTabPane v-for="(category, index) in showData" :key="index" :label="category.category_name" :name="`${index}`">
          <div grid grid-cols-3 grid-rows-2 gap-5 p-5>
            <div v-for="item in category.child" :key="item.id" hover:shadow-deep h-40 flex cursor-pointer rounded-lg bg-white p-2 duration-700>
              <ElImage :src="item.photo" fit="scale-down" />
              <div flex-1 pl-2 pt-2>
                <div line-clamp-1 font-bold>
                  {{ item.name }}
                </div>
                <div line-clamp-2 mt-2 h-9 text-3 text-gray-5>
                  {{ item.introduction }}
                </div>
                <div mt-5 floor-btn>
                  了解详情
                </div>
              </div>
            </div>
          </div>
        </ElTabPane>
      </ElTabs>
    </div>
    <div pc:text-activecolor mt-3 floor-mobile-link pc:floor-link @click="jumpLink(moreLink)">
      查看更多产品 >>
    </div>
    <div mt-10 flex flex-wrap justify-center gap-10 pc:hidden>
      <div
        v-for="(category, index) in productCategory" :key="index" h-45 w-140 cursor-pointer text-center text-12 text-white lh-45
        class="bg-[url('~/assets/img/mobile/productCardBg.png')]"
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>
