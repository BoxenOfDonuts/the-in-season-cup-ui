<template>
  <div>
    <div
      class="text-blue-700 flex flex-col justify-center md:gap-12 md:flex-row"
    >
      <UserCard
        :user="scores[0]"
        :is-leader="scores[0].points === highestPoints"
      />
      <Versus />
      <UserCard
        :user="scores[1]"
        :is-leader="scores[1].points === highestPoints"
      />
    </div>
  </div>
</template>

<script setup>
const { data: scores } = await useLazyFetch("/api/firebase");
const highestPoints = computed(() => {
  const points = scores.value.map((user) => user.points);
  return Math.max(...points);
});
</script>

<style scoped></style>
