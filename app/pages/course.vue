<script setup>
const course = useCourse();
const progress = useCourseProgress();
</script>

<template>
  <div class="max-w-5xl mx-auto p-8">
    <header class="mb-6">
      <h2 class="text-2xl font-bold">{{ course.title }}</h2>
    </header>

    <div class="flex gap-8 mt-5 items-start">
      <aside class="w-70 shrink-0 bg-gray-50 p-5 rounded-lg">
        <div
          v-for="chapter in course.chapters"
          :key="chapter.slug"
          class="mb-6"
        >
          <h4 class="font-semibold text-lg mb-3">{{ chapter.title }}</h4>
          <ul class="flex flex-col gap-2">
            <li v-for="lesson in chapter.lessons" :key="lesson.slug">
              <NuxtLink
                :to="`/course/lesson/${lesson.slug}`"
                class="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors duration-200 p-2 hover:bg-gray-200 rounded"
                active-class="bg-gray-300 font-bold"
              >
                <ClientOnly>
                  <span v-if="progress.includes(lesson.slug)">✅</span>
                  <span v-else>❌</span>

                  <template #fallback>
                    <span class="text-gray-300">⌛</span>
                  </template>
                </ClientOnly>

                {{ lesson.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </aside>

      <main class="grow">
        <NuxtErrorBoundary>
          <NuxtPage />

          <template #error="{ error, clearError }">
            <div
              class="bg-red-50 p-6 rounded-lg border border-red-200 text-center"
            >
              <h3 class="text-xl font-bold text-red-600 mb-2">
                Ups! Komponen ini bermasalah
              </h3>
              <p class="text-gray-700 mb-4">{{ error.value.message }}</p>

              <button
                @click="clearError"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Coba muat ulang area ini
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
