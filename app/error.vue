<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const handlerError = () => {
  clearError({ redirect: "/" });
};
</script>

<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 text-center"
  >
    <h1 class="text-9xl font-extrabold text-red-600">{{ error?.status }}</h1>

    <h2 class="text-3xl font-bold text-gray-900 mt-4">Ada yang salah!</h2>

    <p class="text-lg text-gray-600 mt-2 max-w-md">
      {{
        error?.message || "Kami tidak dapat menampilkan halaman yang Anda tuju."
      }}
    </p>

    <button
      @click="handlerError"
      class="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
    >
      Kembali ke Beranda
    </button>
  </div>
</template>

<style scoped></style>
