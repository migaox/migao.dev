import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'switch-animation': 'transition duration-300',
    'bg-base': 'bg-[#f0f0f0] dark:bg-[#20202a] switch-animation',
    'card-base': 'bg-[#ffffff] dark:bg-[#10101a] switch-animation',
    'text-base': 'text-[#20202a] dark:text-[#f0f0f0] switch-animation',
    'switch-label-base': 'bg-gray-200 dark:bg-gray-800 switch-animation',
    'switch-span-base': 'bg-white dark:bg-gray-300 switch-animation',
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
    }),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],
})
