<script setup lang="ts">
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/confirm",
    },
  });

  if (error) {
    console.error("Login error:", error.message);
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-200">
    <div class="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
      <h1 class="text-2xl font-black text-gray-900 mb-2">Masuk ke Akun</h1>
      <p class="text-gray-600 mb-6 text-sm">
        Silahkan login untuk mengakses materi kursus
      </p>
      <button
        class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg w-full flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200"
        @click="login"
        type="button"
      >
        Login dengan GitHub
      </button>
    </div>
  </div>
</template>

<style scoped></style>
