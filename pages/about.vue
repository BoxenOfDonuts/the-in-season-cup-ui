<template>
  <div class="mx-auto px-5 flex flex-col gap-5">
    <section>
      <h1>The In-Season Cup</h1>
      <p>
        The In-Season Cup was an idea discussed on the October 7th, 2021 episode
        of the
        <a
          href="https://podcasts.apple.com/ie/podcast/the-in-season-stanley-cup/id1332150124?i=1000537848537"
          >32 Thoughts Podcast</a
        >, hosted by Elliotte Friedman and Jeff Marek. In the episode, they
        explained the idea behind the In Season Cup and performed a 4-person
        draft to decide a winner.
      </p>
    </section>
    <section>
      <h2>This Site</h2>
      <p>
        I made this site for my wife and I as a fun way to learn
        <a href="https://nuxt.com/">Nuxt</a>, Instead of tracking everything in
        a spreadsheet. The backend checks the games every morning at 8 AM CT and
        updates the winners and scores accordingly.
      </p>
    </section>
    <section>
      <h2>Rules</h2>
      <p>
        The Winner of the Stanley Cup (2021-2022 Colorado Avalanche) start with
        <TheCup />. The first team to defeat them then take possession of
        <TheCup />. The Team that then defeats that team takes <TheCup />, and
        so on for the entire regular season.
      </p>
      <p>
        After each day of the regular season, whoever holds <TheCup /> will be
        awarded one point (even if they do not play that day).
      </p>
    </section>
    <section>
      <h2>Winning</h2>
      <div>
        <ol class="list-decimal list-inside">
          <li>Whoever Holds <TheCup /> at the end of the season.</li>
          <li>
            Whichever player holds <TheCup /> for the most days throughout the
            regular season.
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
h1,
h2,
h3 {
  @apply text-blue-300 mb-2;
}

h1 {
  @apply text-3xl md:text-7xl mb-2;
}

h2 {
  @apply text-2xl md:text-5xl;
}

p,
li {
  @apply text-left md:text-center text-white;
}
a {
  @apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
}
</style>
