<template>
  <div>
    <header class="shadow-sm bg-slate-800 mb-5">
      <nav class="p-4 mx-auto flex gap-4">
        <NuxtLink class="font-bold text-gray-200" to="/">
          The In-Season Cup
        </NuxtLink>
        <NuxtLink class="font-bold text-gray-200" to="/about">About</NuxtLink>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
  @apply border-b-4 border-blue-300 -mb-1;
}
</style>
