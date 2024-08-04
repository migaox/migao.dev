import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'switch-animation': 'transition duration-300',
      'bg-base': 'bg-white dark:bg-[#050505] switch-animation',
      'color-base': 'text-[#050505] dark:text-white switch-animation',
      'border-base': 'border-[#8884] switch-animation',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetTypography({
      cssExtend: {
        h1: {
          'font-size': 'clamp(1.5rem, 5vw, 2rem)',
          'line-height': '1.2em',
          'text-align': 'left',
        },
        h2: {
          'font-size': 'clamp(1.25rem, 5vw, 1.75rem)',
          'line-height': '1.2em',
          'text-align': 'left',
        },
        h3: {
          'font-size': 'clamp(1.125rem, 5vw, 1.5rem)',
          'line-height': '1.2em',
          'text-align': 'left',
        },
        h4: {
          'font-size': 'clamp(1rem, 5vw, 1.25rem)',
          'line-height': '1.2em',
          'text-align': 'left',
        },
      },
    }),
    presetWebFonts(),
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
    }),
  ],
})
