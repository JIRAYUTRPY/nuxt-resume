// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "light",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxtjs/i18n", "@nuxtjs/color-mode"],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
