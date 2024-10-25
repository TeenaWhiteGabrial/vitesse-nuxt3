<script setup lang="ts">

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
      <HeaderLogin />
      <HeaderMobileSearch />
      <HeaderMobileUser />
      <HeaderMobileMenu />
    </div>
  </div>
</template>
