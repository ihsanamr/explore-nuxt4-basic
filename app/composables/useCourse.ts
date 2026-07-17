export const useCourse = () => {
  // Kita mengembalikan sebuah object berisi data kursus
  return {
    title: "Mastering Full-Stack Basics",
    chapters: [
      {
        title: "Chapter 1: Building Our MVP",
        slug: "chapter-1",
        number: 1,
        lessons: [
          {
            title: "File Based Routing",
            slug: "file-based-routing",
            number: 1,
            text: "Belajar bagaimana Nuxt mengatur halaman berdasarkan file.",
          },
          {
            title: "Dynamic Routes",
            slug: "dynamic-routes",
            number: 2,
            text: "Belajar membuat URL yang dinamis dengan slug.",
          },
        ],
      },
    ],
  };
};
