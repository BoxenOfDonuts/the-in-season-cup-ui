<template>
  <div>
    <div class="mx-auto px-5 flex flex-col gap-5 container">        
      <h2 class="text-blue-300 mb-2 text-2xl md:text-5xl">
        This Page is down for maintenance.
      </h2>
      <p class="text-left md:text-center text-white">
        The NHL removed their old stats API and replaced it with a new one. I am currently working on updating the site to use the new API. Please check back later.
      </p>
    </div>
  </div>
</template>
  
<script setup>
  useHead({
    title: "The In-Season Cup",
    meta: [{ name: "description", content: "Current results of The Cup so far" }],
  });
</script>

<style scoped>
</style>
