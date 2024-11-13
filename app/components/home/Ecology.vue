<script lang="ts" setup>
    const { data } = defineProps(['data'])
    if (!data) {
        throw new Error('应用案例楼层数据缺失')
    }
    const { name, categorys, images, descriptions, links } = data
    const count = Math.min(
        categorys.length,
        images.length,
        descriptions.length,
        links.length,
    )
    const showData: any[] = []
    for (let i = 0; i < count; i++) {
        showData.push({
            title: categorys[i],
            content: descriptions[i],
            idView: images[i].url,
            link: links[i],
        })
    }
</script>

<template>
  <div>
    <div my-10 floor-title>
      {{ name }}
    </div>
    <div class="pc" mx-auto hidden w-300 pc:block>
      <ElCarousel
        indicator-position="none"
        type="card"
        height="25rem"
        :autoplay="false"
      >
        <ElCarouselItem v-for="(item, index) in showData" :key="index">
          <div h-100 flex :style="{ 'background-image': `url(${item.idView})` }">
            <div mr-20 flex px-10 pt-40 text-center text-6 text-white font-bold>
              <div w-40>
                {{ item.title }}
              </div>
            </div>
            <div class="center-content bg-black/50" h-full flex-1 px-10>
              <div my-6 text-8 text-white font-bold>
                {{ item.title }}
              </div>
              <div line-clamp-6 my-12 h-24 text-white>
                {{ item.content }}
              </div>
              <div btn-transparent @click="jumpLink({ url: item.link })">
                了解详情
              </div>
            </div>
            <div class="right-content" flex px-10 pt-40 text-center text-6 text-white font-bold>
              <div w-40>
                {{ item.title }}
              </div>
            </div>
          </div>
        </ElCarouselItem>
      </ElCarousel>
    </div>
    <div block w-full px-10 pc:hidden>
      <ElCarousel indicator-position="outside" height="25rem" :autoplay="false">
        <ElCarouselItem v-for="(item, index) in showData" :key="index">
          <div relative h-100 w-full :style="{ 'background-image': `url(${item.idView})` }">
            <div class="bg-black/50" absolute bottom-0 left-0 h-30 w-full text-center text-16 text-white font-bold lh-30>
              {{ item.title }}
            </div>
          </div>
        </ElCarouselItem>
      </ElCarousel>
    </div>
  </div>
</template>

<style scoped>
    .center-content {
        display: none
    }

    :deep(.pc .el-carousel__item--card.is-active) {
        transform: translateX(200px) scale(1) !important;
        width: 800px;
    }

    :deep(.pc .is-active .center-content) {
        display: block;
    }

    :deep(.pc .is-active .right-content) {
        display: none;
    }
</style>
