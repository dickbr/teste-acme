import PostCssConfig from "./postcss.config.js";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
		'@pinia/nuxt',
    "@nuxt/image"
  ],
  css: [
    '@/assets/css/tailwind.css',
  ],
  postcss: PostCssConfig,
})