<script setup lang="ts">
  const { data } = defineProps(['data'])
  if (!data) {
    throw new Error('平台运营楼层数据缺失')
  }
  const { name, introduction, categorys, links, descriptions, images } = data
  const platformCategorys = supplementaryData(categorys, 3)
  const platformLinks = supplementaryData(links, 3)
  const platformDescs = supplementaryData(descriptions, 3)
  const platformImage = supplementaryData(images, 3)
</script>

<template>
  <div class="bg-[url('~/assets/img/mobile/platformBg.png')] px-10 py-15">
    <div floor-title>
      {{ name }}
    </div>
    <div floor-desc>
      {{ introduction }}
    </div>
    <div mx-auto mt-10 max-w-300 w-full flex flex-wrap justify-center gap-4>
      <div relative h-108 w-198 @click="jumpLink({ url: platformLinks[0] })">
        <img :src="platformImage[0].url" absolute left-0 top-0 z-0 h-full w-full rounded-md>
        <div class="bg-zinc-700/70" absolute bottom-0 left-0 z-2 w-full px-10 py-4 text-center text-white pc:text-left>
          <div font-bold>
            {{ platformCategorys[0] }}
          </div>
          <div line-clamp-2 mt-3 text-3>
            <span>
              {{ platformDescs[0] }}
            </span>
          </div>
        </div>
      </div>
      <div w-198 flex flex-wrap justify-center gap-4 pc:w-96>
        <div relative h-52 w-96>
          <img :src="platformImage[1].url" h-full w-full rounded-md>
          <div absolute class="bg-zinc-700/70" bottom-0 left-0 z-2 w-full px-10 py-4 text-center text-white pc:text-left>
            <div font-bold>
              {{ platformCategorys[1] }}
            </div>
          </div>
        </div>
        <div relative h-52 w-96>
          <img :src="platformImage[2].url" h-full w-full rounded-md>
          <div class="bg-zinc-700/70" absolute bottom-0 left-0 z-2 w-full px-10 py-4 text-center text-white pc:text-left>
            <div font-bold>
              {{ platformCategorys[2] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
