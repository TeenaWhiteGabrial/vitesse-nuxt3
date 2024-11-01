import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1.5 rounded inline-block text-3.5 bg-[#064eab] text-white cursor-pointer disabled:cursor-default'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['mask', 'block fixed top-total-header right-0 bottom-0 left-0 bg-black/50 -z-1'],
  ],
  theme: {
    colors: {
      linkColor: '#005BFC',
      activeColor: '#0e6dff',

    },
    breakpoints: {
      pc: '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    height: { // 高度配置
      'header-height': '4.5rem', // 栏目高度
      'column-height': '4.25rem', // 除去底部的栏目高度
    },
    lineHeight: { // 行高配置
      'column-height': '4.25rem', // 除去底部的栏目高度
    },
    spacing: { // 间距配置
      'total-header': '5.8125rem', // topHeader + header 的高度
    },
  },
  presets: [
    // 默认预设，包括Tailwind CSS, Windi CSS, Bootstrap,是这些的通用超集
    presetUno(),
    // 属性化预设。用于将属性分组，提高代码可读
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),

    // presetWebFonts({
    //   fonts: {
    //     sans: 'DM Sans',
    //     serif: 'DM Serif Display',
    //     mono: 'DM Mono',
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
