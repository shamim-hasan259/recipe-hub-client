import { serverProtectedFetch } from "../core/server";

export const getFavouriteRecipe = async (userId) => {
  return await serverProtectedFetch(`/api/get/favourite?userId=${userId}`);
};
