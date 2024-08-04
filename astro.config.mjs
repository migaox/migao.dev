import { defineConfig } from 'astro/config'
import { site } from './site.config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: site.url,
  compressHTML: true,
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
})
