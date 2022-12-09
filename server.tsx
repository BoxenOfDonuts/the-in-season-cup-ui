/** @jsx h */
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import html, { h } from "https://deno.land/x/htm/mod.ts";
import UnoCSS from "https://deno.land/x/htm/plugins/unocss.ts";

// enable UnoCSS
html.use(UnoCSS())

const joelPoints = 35
const lianPoints = 24

const handler = (req: Request) => html({
  classes: {
    body: ['bg-slate-900']
  },
  title: "The In Season Cup",
  body: (
    <div
      class="text-center w-full bg-slate-900 h-screen pt-2 md:pt-12 p-2"
    >
    <h1 class="text-7xl text-gray-200 mb-6">The In Season Cup</h1>
    <div class="text-blue-700 flex flex-col justify-center md:gap-12 md:flex-row">
      <section>
        <div class="flex justify-center -mb-8">
          <img src="https://img.icons8.com/color/96/null/fairytale.png"/>
        </div>
        <h1 class="text-9xl mb-4">
          Joel
        </h1>
        <p class="text-blue-300 text-6xl">{ joelPoints }</p>
      </section>
      <div class="flex flex-col justify-center">
        <h3 class="mt-10 text-6xl text-yellow-400">
          vs
        </h3>
      </div>
      <section>
        <div class="hidden justify-center -mb-8 md:flex md:block md:invisible">
          <img class="" src="https://img.icons8.com/color/96/null/fairytale.png"/>
        </div>
        <h1 class="text-9xl mb-4">
          Lian
        </h1>
        <p class="text-blue-300 text-6xl">{ lianPoints }</p>
      </section>
    </div>
  </div>
  ),
});


serve(handler);
