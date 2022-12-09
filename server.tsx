/** @jsx h */
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import { h, html } from "https://deno.land/x/htm@0.0.10/mod.tsx";
import { UnoCSS } from "https://deno.land/x/htm@0.0.10/plugins.ts";

// enable UnoCSS
html.use(UnoCSS())

const joelPoints = 35
const lianPoints = 24

const handler = (req: Request) => html({
  title: "The In Season Cup",
  body: (
    <div
      class="text-center bg-slate-900 w-full h-screen pt-12"
    >
    <h1 class="text-7xl text-gray-200 mb-6">The In Season Cup</h1>
    <div class="text-blue-700 flex justify-center gap-12">
      <section>
        <div class="flex justify-center">
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
      <div>
        <img class="invisible" src="https://img.icons8.com/color/96/null/fairytale.png"/>
        <h1 class="text-9xl mb-4">
          Lian
        </h1>
        <p class="text-blue-300 text-6xl">{ lianPoints }</p>
      </div>
    </div>
  </div>
  ),
});


serve(handler);
