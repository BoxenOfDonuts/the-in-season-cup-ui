// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "The In-Season Cup",
      meta: [
        {
          name: "description",
          content: "Husband vs Wife for the In-Season Cup",
        },
        { name: "theme-color", content: "rgb(30 41 59)" },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  compatibilityDate: '2025-06-07',

  runtimeConfig: {
    firebaseConfig: process.env.FIREBASE_CONFIG || "{}",
    dev: process.env.NODE_ENV !== "production",
    public: {
      ENV: process.env.NODE_ENV,
      VERSION: process.env.npm_package_version,
    }
  },
});
