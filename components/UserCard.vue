<template>
  <section>
    <div
      class="flex justify-center -mb-7"
      :class="{ 'hidden md:invisible md:block': !isLeader }"
    >
      <img class="h-24 w-24" src="/images/crown-96.png" alt="champion crown" />
    </div>
    <h1 class="text-9xl mb-4">{{ user.name }}</h1>
    <p class="text-blue-300 text-6xl">{{ user.points }}</p>
  </section>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    default: () => {},
  },
  isLeader: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
