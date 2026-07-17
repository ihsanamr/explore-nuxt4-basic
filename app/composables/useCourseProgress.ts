import { useLocalStorage } from "@vueuse/core";

export const useCourseProgress = () => {
  return useLocalStorage<string[]>("course-progress", () => {
    return [];
  });
};
