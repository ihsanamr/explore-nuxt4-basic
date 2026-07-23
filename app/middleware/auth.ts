export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  console.log("user", user);

  if (!user.value) {
    return navigateTo("/login");
  }
});
