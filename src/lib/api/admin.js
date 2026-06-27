import { serverProtectedFetch } from "../core/server";

export const getSingleRecipeAdmin = async (id) => {
  return await serverProtectedFetch(`/api/singlerecipe/admin/${id}`);
};

export const allrecipeFetchedAdmin = async () => {
  return await serverProtectedFetch("/api/all/recipe");
};
