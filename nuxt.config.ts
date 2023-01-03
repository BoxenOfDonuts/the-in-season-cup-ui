// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "The In-Season Cup",
      meta: [
        {
          name: "description",
          content: "Husband vs Wife for the In-Season Cup",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  runtimeConfig: {
    firebaseConfig: process.env.FIREBASE_CONFIG || "{}",
  },
});
