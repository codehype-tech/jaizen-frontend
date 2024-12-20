// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "vuetify-nuxt-module",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
  ],
  // i18n: {
  //   langDir: "assets/locales/",
  //   locales: [
  //     { name: "English", code: "en", iso: "en-US", file: "en.json" },
  //     { name: "ไทย", code: "th", iso: "th-TH", file: "th.json" },
  //   ],
  //   defaultLocale: "th",
  //   detectBrowserLanguage: false,
  // },
  future: {
    compatibilityVersion: 4,
  },
  pinia: {
    storesDirs: ["./app/stores/**"],
  },
  runtimeConfig: {
    // Private variables (only available on server-side)
    // secretApiKey: process.env.SECRET_API_KEY,

    // Public variables (available on client-side via `useRuntimeConfig()`)
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      appName: process.env.PUBLIC_APP_NAME,
    },
  },
  vuetify: {
    vuetifyOptions: "./vuetify.config.ts",
  },
  build: {
    transpile: ["vuetify-nuxt-module"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: "modern",
        },
        scss: {
          additionalData: `@use "@jaizen/base/app/assets/styles/global.scss" as *;`, // Use alias for brevity
        },
      },
    },
  },
  css: ["@jaizen/base/app/assets/styles/global.scss"],
});
