<template>
  <section class="mx-auto">
    <div class="mx-auto max-w-xs">
      <img
        class="h-24 w-24 -rotate-[25deg] -mb-7"
        :class="{ 'hidden md:invisible md:block': !user.hasCrown }"
        src="/images/crown-96.png"
        alt="champion crown"
      />
      <h1 class="text-9xl mb-4">{{ user.name }}</h1>
    </div>
    <div v-if="user.pointChampion" class="flex items-end">
      <p class="text-blue-300 text-3xl">
        {{ `${user.points} Days as Champion` }}
      </p>
      <img
        src="/images/stanley-cup.png"
        alt="The Stanley Cup"
        class="h-24 w-24"
      />
    </div>

    <div v-if="user.finalHolder" class="flex items-end">
      <p class="text-blue-300 text-3xl">Final Champion</p>
      <img
        :src="`/images/${champ.teamId}.svg`"
        :alt="`${champ.name} logo`"
        class="h-24 w-24"
      />
      <img
        src="/images/stanley-cup.png"
        alt="The Stanley Cup"
        class="h-24 w-24"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    default: () => {},
  },
  champ: {
    type: Object,
    default: () => {},
  },
});
</script>

<style scoped></style>
