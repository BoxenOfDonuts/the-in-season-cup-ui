<template>
  <div>
    <div
      class="text-blue-700 flex flex-col justify-center md:gap-12 md:flex-row"
    >
      <UserCard :user="scores[0]" />
      <Versus />
      <UserCard :user="scores[1]" />
    </div>
  </div>
</template>

<script setup>
const scores = [
  { name: "Joel", points: 0 },
  { name: "Lian", points: 0 },
];
</script>

<style scoped></style>
