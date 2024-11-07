<script setup lang="ts">
  interface Banner {
    photo: string
    title: string
    desc: string
    link: string

  }
  const { bannerList }: { bannerList: Banner[] } = useContentStore()
</script>

<template>
  <div>
    <ElCarousel height="29vw" :autoplay="false">
      <ElCarouselItem v-for="(banner, index) in bannerList" :key="index">
        <div relative h-full w-full cursor-pointer @click="jumpLink({ url: banner.link })">
          <ElImage relative z-1 :src="banner.photo" class="h-full w-full" fit="cover" />
        </div>
      </ElCarouselItem>
    </ElCarousel>
  </div>
</template>
