<script setup lang="ts">
  const language = 'EN'

  let siteList: any[] = []
  const resData: any = await useCustomFetch('/gateway/portal/open/substation/getSubstationTree')
  if (resData.code === 200) {
    siteList = resData.data
  }
</script>

<template>
  <div bg="#005bff" flex="~ row-reverse" relative h-5.25 w-full text-size-xs color-white lh-5.25>
    <div class="group mr-10 cursor-pointer">
      <span mr-1>云洲子站</span>
      <Icon name="cuida:caret-down-outline" class="inline-block group-hover:hidden" />
      <Icon name="cuida:caret-up-outline" class="hidden group-hover:inline-block" />

      <div absolute left-2.5vw z-9 hidden w-95vw rounded-b-lg b-t-none bg-white py-4 shadow-lg group-hover:block class="bg-[url('~/assets/img/sub-site-bg.jpg')]">
        <div v-for="item in siteList" :key="item.categoryId" class="px-16 py-4 text-left text-gray-700">
          <div border-b-2 pb-1.5>
            <img :src="item.categoryPhoto" mr-4 inline-block h-7.5 w-7.5>
            <span font-bold>{{ item.categoryName }}</span>
          </div>
          <div mt-4>
            <a
              v-for="site in item.substationList" :key="site.substationId"
              :href="site.substationUrl" target="_blank"
              mr-6 inline-block font-bold hover:text-link-color
            >
              {{ site.substationName }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="group mr-10 cursor-pointer">
      <Icon name="material-symbols:language" mr-1 align-middle group-hover:color-bluegray />
      <span mr-1 group-hover:color-bluegray>{{ language }}</span>
    </div>
  </div>
</template>
