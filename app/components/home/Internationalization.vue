<script setup lang="ts">
  const { data } = defineProps(['data'])
  if (!data) {
    throw new Error('国际化楼层数据缺失')
  }
  const { name, introduction, categorys, descriptions } = data
  const inCategorys = supplementaryData(categorys, 4)
  const inDescs = supplementaryData(descriptions, 4)
  const showData: any[] = []
  for (let i = 0; i < 4; i++) {
    const arr = inDescs[i].split(' ')
    showData.push({
      number: arr[0],
      unit: arr[1],
      label: inCategorys[i],
    })
  }
</script>

<template>
  <div>
    <div relative hidden min-h-140 bg-gray-1 px-25 pt-15 pc:block>
      <div class="w-4/5" mx-auto floor-title text-center>
        {{ name }}
      </div>
      <div absolute z-2 ml-25>
        <div mt-20 w-120>
          {{ introduction }}
        </div>
        <div mt-10 w-120 flex flex-wrap gap-x-40 gap-y-10>
          <div v-for="(item, index) in showData" :key="index" w-35>
            <div font-bold>
              <span mr-2 text-10>{{ item.number }}</span>
              <span>{{ item.unit }}</span>
            </div>
            <div>{{ item.label }}</div>
          </div>
        </div>
      </div>
      <img mt-25 src="~/assets/img/inBG.png" w-200 class="z-1 ml-1/3">
    </div>

    <div relative block min-h-100 bg-gray-1 pt-15 pc:hidden>
      <div absolute z-2 w-full>
        <div floor-title>
          {{ name }}
        </div>
        <div mx-auto mt-10 w-170 text-center text-6>
          {{ introduction }}
        </div>
        <div mx-auto mt-10 w-170 flex justify-between>
          <div v-for="(item, index) in showData" :key="index">
            <div font-bold>
              <span mr-2 text-14>{{ item.number }}</span>
              <span>{{ item.unit }}</span>
            </div>
            <div>{{ item.label }}</div>
          </div>
        </div>
      </div>
      <img mx-auto src="~/assets/img/inBG.png" w-180 class="z-1">
    </div>
  </div>
</template>
