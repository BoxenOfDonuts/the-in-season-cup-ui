<template>
  <div class="mx-auto px-5 flex flex-col gap-5">
    <section>
      <AboutHeaders>The In-Season Cup</AboutHeaders>
      <p class="text-left md:text-center text-white">
        The In-Season Cup was an idea discussed on the October 7th, 2021 episode
        of the
        <a
          class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="https://podcasts.apple.com/ie/podcast/the-in-season-stanley-cup/id1332150124?i=1000537848537"
          >32 Thoughts Podcast</a
        >, hosted by Elliotte Friedman and Jeff Marek. In the episode, they
        explained the idea behind the In Season Cup and performed a 4-person
        draft to decide a winner.
      </p>
    </section>
    <section>
      <AboutHeaders>This Site</AboutHeaders>
      <p class="text-left md:text-center text-white">
        I made this site for my wife and I as a fun way to learn
        <a href="https://nuxt.com/">Nuxt</a>, Instead of tracking everything in
        a spreadsheet. The backend checks the games every morning at 8 AM CT and
        updates the winners and scores accordingly.
      </p>
    </section>
    <section>
      <AboutHeaders>Rules</AboutHeaders>
      <p class="text-left md:text-center text-white">
        The Winner of the Stanley Cup (2021-2022 Colorado Avalanche) start with
        <TheCup />. The first team to defeat them then take possession of
        <TheCup />. The Team that then defeats that team takes <TheCup />, and
        so on for the entire regular season.
      </p>
      <p class="text-left md:text-center text-white">
        After each day of the regular season, whoever holds <TheCup /> will be
        awarded one point (even if they do not play that day).
      </p>
    </section>
    <section>
      <AboutHeaders>Winning</AboutHeaders>
      <div>
        <ol class="list-decimal list-inside">
          <li class="text-left md:text-center text-white">
            Whoever Holds <TheCup /> at the end of the season.
          </li>
          <li class="text-left md:text-center text-white">
            Whichever player holds <TheCup /> for the most days throughout the
            regular season.
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => `${titleChunk}: About`,
  meta: [{ name: "description", content: "About the site" }],
});
</script>
