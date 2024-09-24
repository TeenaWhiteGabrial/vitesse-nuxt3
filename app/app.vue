<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: `${appName}`,
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: 'avatar002.png' },
  ],
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
    <DragBall />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
