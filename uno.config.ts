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
  // rules: [
  //   [/^left-(\d+)$/, ([, d]) => ({ left: `${(Number(d ?? 0)) / 4}rem` })],
  //   [/^top-(\d+)$/, ([, d]) => ({ top: `${(Number(d ?? 0)) / 4}rem` })],
  // ],
  shortcuts: [
    // [/^fixed-(\d+)-(\d+)$/, (,, left,, top)=> `fixed left-${left} top-${top}` ],

    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    [/^fixed-\d+-\d+$/, ([, c, e]) => `fixed left-${c} top-${e}`],
    // flex
    [
      /^f-(([cse])(-([cseba]))*)$/,
      ([, , g1, , g2]) => {
        let style = ``
        const temps = [
          { k: 'c', v: 'center' },
          { k: 's', v: 'start' },
          { k: 'e', v: 'end' },
          { k: 'b', v: 'between' },
          { k: 'a', v: 'around' },
        ]

        const r1 = temps.find(i => i.k === g1)
        style = `flex items-${r1?.v || 'center'} content-${r1?.v || 'center'}`

        if (g2) {
          const r2 = temps.find(i => i.k === g2)
          style += ` justify-${r2?.v || 'center'}`
        }

        return style
      },
    ],
  ],

  presets: [
    // 默认预设，包括Tailwind CSS, Windi CSS, Bootstrap,是这些的通用超集
    presetUno(),
    // 属性化预设。用于将属性分组，提高代码可读
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
