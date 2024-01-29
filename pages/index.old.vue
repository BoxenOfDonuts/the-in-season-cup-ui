<template>
  <div>
    <div class="text-blue-700 relative flex flex-col justify-center md:gap-11 md:grid md:grid-rows-2 md:grid-cols-2">
        <UserCard v-for="user in scores" :user="user" />
        <div class="absolute flex items-center justify-center min-h-full inset-0">
          <Versus class="hidden md:block" />
        </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "The In-Season Cup",
  meta: [{ name: "description", content: "Current results of The Cup so far" }],
});

const { data: scores } = await useFetch("/api/firebase/users");

// const [{ data: scores }, { data: champ }] = await Promise.all([
//   useFetch("/api/firebase/users"),
//   useFetch("/api/firebase/champion"),
// ]);

// scores.value.forEach((user) => {
//   user.hasCrown = user.teams.includes(champ.value.teamId);
//   // user.hasCrown = user.pointChampion || user.finalHolder;
// });
</script>

<style scoped></style>
