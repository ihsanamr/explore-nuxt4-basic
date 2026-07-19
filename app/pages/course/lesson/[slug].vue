<script setup>
const route = useRoute();
const progress = useCourseProgress();
const course = useCourse();

definePageMeta({
  validate: (route) => {
    const slugParams = route.params.slug;

    const course = useCourse();

    const chapter = course.chapters.find((chapter) => {
      return chapter.lessons.some((lesson) => lesson.slug === slugParams);
    });

    if (chapter) {
      return true;
    } else {
      throw createError({
        status: 404,
        message: `Pelajaran dengan topik "${slugParams}" tidak ditemukan.`,
        fatal: true,
      });
    }
  },
});

const lessonIsCompleted = computed(() => {
  return progress.value.includes(route.params.slug);
});

const toggleProgress = () => {
  if (lessonIsCompleted.value) {
    progress.value = progress.value.filter(
      (slug) => slug !== route.params.slug,
    );
  } else {
    progress.value.push(route.params.slug);
  }
};

useHead({
  title: `Pelajaran: ${route.params.slug} - Aplikasi Kursus`,
  meta: [
    {
      nama: "description",
      content: "Halaman ini berisi materi pelajaran web development.",
    },
  ],
});
</script>

<template>
  <div class="p-5 bg-gray-50 rounded-lg">
    <p class="text-gray-500 text-sm uppercase">16 Juli 2026</p>
    <h2 class="mt-2 mb-3 text-2xl font-bold">
      Pelajaran: {{ route.params.slug }}
    </h2>

    <div class="my-5 flex flex-col items-center justify-center">
      <VideoPlayer :videoId="76979871" />
    </div>

    <p class="text-gray-700 leading-relaxed">
      Ini adalah teks deskripsi dari pelajaran yang sedang aktif. Fokus kita
      sekarang adalah merapikan struktur tampilan sebelum menyambungkan data.
    </p>

    <button
      @click="toggleProgress"
      class="px-4 py-2 w-full font-bold rounded text-white transition-colors duration-200 mt-5 cursor-pointer"
      :class="
        lessonIsCompleted
          ? 'bg-red-500 hover:bg-red-600'
          : 'bg-green-500 hover:bg-green-600'
      "
    >
      {{ lessonIsCompleted ? "Tandai Belum Selesai" : "Tandai Selesai" }}
    </button>
  </div>
</template>

<style scoped></style>
