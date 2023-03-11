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
const [{ data: scores }, { data: champ }] = await Promise.all([
  useLazyFetch("/api/firebase/users"),
  useLazyFetch("/api/firebase/champion"),
]);

scores.value.forEach((user) => {
  user.hasCrown = user.teams.includes(champ.value.teamId);
});
</script>

<style scoped></style>
