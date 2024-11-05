import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt', // 依赖的dayjs存在问题，需要手动安装dayjs
    'nuxt-lodash',
  ],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/common.css',
  ],
  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },

  },
  pwa,
  // 与VueDevTools 互斥
  devtools: {
    enabled: false,
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-04',
  // 运行时配置
  runtimeConfig: {
    public: {
      // eslint-disable-next-line node/prefer-global/process
      apiBase: process.env.NUXT_PUBLIC_API_BASE, // 基础请求服务器地址
      // eslint-disable-next-line node/prefer-global/process
      loginUrl: process.env.NUXT_PUBLIC_LOGIN_URL,
      // eslint-disable-next-line node/prefer-global/process
      logoutUrl: process.env.NUXT_PUBLIC_LOGOUT_URL,
      // eslint-disable-next-line node/prefer-global/process
      redirectUrl: process.env.NUXT_PUBLIC_DEV_REDIRECTRUL,
    },
  },

  piniaPersistedstate: {
    cookieOptions: { // 过期时间
      maxAge: 2 * 365 * 24 * 60 * 60 * 1000,
    },
    storage: 'localStorage',
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './app/assets/icons',
      },
    ],
  },
  lodash: {
    prefix: '_',
  },
  elementPlus: {
    icon: 'ElIcon',
    themes: ['dark'],
  },
})
