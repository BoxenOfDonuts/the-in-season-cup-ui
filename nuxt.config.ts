// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge"],
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
  runtimeConfig: {
    firebaseConfig: process.env.FIREBASE_CONFIG || "{}",
    dev: process.env.NODE_ENV !== "production",
  },
});
