import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  // presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1.5 rounded inline-block text-3.5 bg-[#064eab] text-white cursor-pointer disabled:cursor-default'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['btn-transparent', 'border-light border-1 px-4 py-1.5 inline-block text-3.5 text-white cursor-pointer'],
    ['mask', 'block fixed top-total-header right-0 bottom-0 left-0 bg-black/50 -z-1'],
    ['floor-title', 'w-full text-center font-bold text-8 text-black'], // 楼层标题
    ['floor-desc', 'w-full text-center text-3.5 text-slate-400  mt-4'], // 楼层简述
    ['floor-link', 'w-full cursor-pointer text-center text-4 text-gray-5'], // 查看更多
    ['floor-mobile-link', 'w-full cursor-pointer text-center text-4 text-activeColor'],
    ['floor-btn', 'px-4 py-1.5 border-1 rounded inline-block text-3.5 cursor-pointer'],
  ],
  theme: {
    colors: {
      themeColor: '#0060b2',
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
    fontFamily: {
      yahei: ['Microsoft yahei', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'],
    },
    boxShadow: {
      deep: '0 1px 6px 2px #999',
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
