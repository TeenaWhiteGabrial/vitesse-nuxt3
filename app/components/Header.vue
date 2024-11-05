<script setup lang="ts">
  /** 栏目 */
  const column = useColumnStore()
  await callOnce(column.getColumnList)

  /** 资源树 */
  const resource = useResourceStore()
  await callOnce(resource.getProductionTree)
  await callOnce(resource.getSolutionTree)
  await callOnce(resource.getCaseTree)
</script>

<template>
  <div position="fixed left-0 top-0 z-9999" w-full>
    <TopHeader />
    <div
      flex="~ items-start justify-between"
      bg="#fff"
      class="shadow-[5px_5px_25px_0px_#E4ECF3]"
      box-border h-header-height w-full border-collapse overflow-hidden px-2
    >
      <HeaderLogo />
      <HeaderColumn />
      <HeaderMobileSearch />
      <ClientOnly>
        <HeaderLogin />
      </ClientOnly>
      <HeaderMobileMenu />
    </div>
  </div>
</template>
