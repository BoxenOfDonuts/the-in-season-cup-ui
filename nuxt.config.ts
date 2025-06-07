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

  runtimeConfig: {
    firebaseConfig: Deno.env.get('FIREBASE_CONFIG') || "{}",
    dev: Deno.env.get('NODE_ENV') !== "production",
    public: {
      ENV: Deno.env.get('NODE_ENV'),
      VERSION: Deno.env.get('npm_package_version'),
    }
  },
});
