<script setup lang="ts">
const user = useSupabaseUser();

watch(
  user,
  () => {
    if (user.value) {
      return navigateTo("/course");
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <p class="text-xl font-semibold text-gray-700">Memproses otentikasi...</p>
  </div>
</template>
