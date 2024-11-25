<script setup lang="ts">
  interface Point {
    label: string
    value: string
  }
  const { pointList }: { pointList: Point[] } = useContentStore()
</script>

<template>
  <div>
    <div hidden h-31 w-full bg-gray-100 pc:flex>
      <div mx-auto h-full w-300 flex items-center justify-between>
        <div v-for="(point, index) in pointList" :key="index" box-border h-full w-70 cursor-pointer p-x-8 p-y-6>
          <div font-bold>
            {{ point.label }}
          </div>
          <div line-clamp-2 m-t-2 color-gray-600 :title="point.value">
            {{ point.value }}
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[url('~/assets/img/mobile/pointBg.png')]" min-h-115 w-full flex flex-wrap gap-10 bg-cover bg-no-repeat px-10 py-20 pc:hidden>
      <div v-for="(point, index) in pointList" :key="index" class="bg-[url('~/assets/img/mobile/pointBlock.png')]" mx-auto my-0 h-30 w-130 flex items-center>
        <div w-full text-center text-12 color-blue-700 font-bold>
          {{ point.label }}
        </div>
      </div>
    </div>
  </div>
</template>
