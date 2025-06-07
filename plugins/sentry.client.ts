// import { defineNuxtPlugin } from '#app';
// import * as Sentry from '@sentry/browser';

// export default defineNuxtPlugin((nuxtApp) => {
//     const runtimeConfig = useRuntimeConfig()
//     const environment = runtimeConfig.public.ENV;
//     const release = runtimeConfig.public.VERSION;

//     Sentry.init({
//         release: `the-in-season-cup-ui@${release}`,
//         dsn: 'https://973d8773612d47b3a475783d06c756dd@o4505455379087360.ingest.sentry.io/4505455467560960',
//         environment,
//         integrations: [
//             new Sentry.BrowserTracing({
//                 tracePropagationTargets: ["localhost", /^https:\/\/theinseasoncup\.com\/api/],
//             }),
//             new Sentry.Replay()
//         ],
//         tracesSampleRate: 1,
//         replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//         replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
//     });
// });
