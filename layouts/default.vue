<template>
  <TopHeader></TopHeader>
  <ColumnHeader></ColumnHeader>
  <main>
    <slot />
  </main>
   <Footer />
</template>
<style lang="scss" scoped>
.app-main {
  width: 100%;

}
</style>
