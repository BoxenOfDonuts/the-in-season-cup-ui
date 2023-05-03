<template>
  <div>
    <div
      class="text-blue-700 flex flex-col justify-center md:gap-12 md:flex-row"
    >
      <FinalUserCard :user="scores[0]" :champ="champ" />
      <Versus />
      <FinalUserCard :user="scores[1]" :champ="champ" />
    </div>
  </div>
</template>

<script setup>
const [{ data: scores }, { data: champ }] = await Promise.all([
  useFetch("/api/firebase/users"),
  useFetch("/api/firebase/champion"),
]);

scores.value.forEach((user) => {
  user.hasCrown = user.teams.includes(champ.value.teamId);
  // user.hasCrown = user.pointChampion || user.finalHolder;
});
</script>

<style scoped></style>
