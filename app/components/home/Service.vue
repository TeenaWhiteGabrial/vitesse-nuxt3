<script setup lang="ts">
  interface serviceData {
    name: string
    desc: string
    link: string
    icon: string
    image: string
  }
  const { data } = defineProps(['data'])
  if (!data) {
    throw new Error('综合服务楼层数据缺失')
  }
  const { name, introduction, categorys, links, descriptions, icons, images } = data
  const serviceCategorys = supplementaryData(categorys, 3)
  const serviceLinks = supplementaryData(links, 3)
  const serviceDescs = supplementaryData(descriptions, 3)
  const serviceIcons = supplementaryData(icons, 3)
  const serviceImages = supplementaryData(images, 3)
  const showData: serviceData[] = []
  for (let i = 0; i < 3; i++) {
    const item = {
      name: serviceCategorys[i],
      desc: serviceDescs[i],
      link: serviceLinks[i],
      icon: serviceIcons[i].url,
      image: serviceImages[i].url,
    }
    showData.push(item)
  }
</script>

<template>
  <div pt-15>
    <div hidden pc:block>
      <div floor-title>
        {{ name }}
      </div>
      <div floor-desc hidden pc:block>
        {{ introduction }}
      </div>
      <div mx-auto mt-10 hidden w-300 justify-between pc:flex>
        <div v-for="(item, index) in showData" :key="index" relative h-50 w-96 cursor-pointer border-1 bg-white p-8 hover:bg-gray-1>
          <div text-6 text-blue-8 font-bold>
            {{ item.name }}
          </div>
          <div line-clamp-2 mt-5 text-3 text-gray-4>
            {{ item.desc }}
          </div>
          <div mt-8 text-3.25 text-gray-6>
            立即前往 >>
          </div>
          <img :src="item.icon" absolute bottom-6 right-6 z-10 h-12 w-12>
        </div>
      </div>
    </div>
    <div block max-w-300 min-h-180 w-full px-10 py-20 pc:hidden class="from-[#4468E2] to-[#45D7F9] bg-gradient-to-b">
      <div w-full text-center text-14 text-white font-bold>
        {{ name }}
      </div>
      <div mt-20 flex flex-wrap justify-center gap-10>
        <div relative h-100 w-130 rounded-md bg-white p-10>
          <div text-10 text-blue-8 font-bold>
            {{ showData[0]?.name }}
          </div>
          <div line-clamp-3 mt-10 w-85 text-6>
            {{ showData[0]?.desc }}
          </div>
          <img src="~/assets/img/mobile/arrow.png" mt-15 h-8 w-8>
          <img :src="showData[0]?.image" absolute bottom-0 right-0 h-50 w-50 object-scale-down>
        </div>
        <div flex flex-col justify-between gap-10>
          <div relative h-45 w-130 rounded-md bg-white px-10 py-5>
            <div text-8 text-blue-8 font-bold>
              {{ showData[1]?.name }}
            </div>
            <img src="~/assets/img/mobile/arrow.png" mt-4 h-8 w-8>
            <img :src="showData[1]?.image" absolute bottom-0 right-0 h-45 w-45 object-scale-down>
          </div>
          <div relative h-45 w-130 rounded-md bg-white px-10 py-5>
            <div text-8 text-blue-8 font-bold>
              {{ showData[2]?.name }}
            </div>
            <img src="~/assets/img/mobile/arrow.png" mt-4 h-8 w-8>
            <img :src="showData[2]?.image" absolute bottom-0 right-0 h-45 w-45 object-scale-down>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
