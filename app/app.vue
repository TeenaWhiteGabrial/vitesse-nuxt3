<script setup lang="ts">
  const website = useWebsiteStore()
  await callOnce(website.fetch)

  useHead({
    title: `${website.description || website.name}`,
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: website.icon },
    ],
  })

  const resource = useResourceStore()
  await callOnce(resource.fetch)
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

  html,
  body,
  #__nuxt {
    margin: 0;
    padding: 0;
  }

  html.dark {
    background: #222;
    color: white;
  }
</style>
