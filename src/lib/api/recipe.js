import { cache } from "react";
import { serverFetch, serverProtectedFetch } from "../core/server";

export const findRecipe = async (userId) => {
  return await serverProtectedFetch(`/api/recipes?userId=${userId}`);
};

export const singleRecipeFetch = async (id) => {
  return await serverProtectedFetch(`/api/singlerecipe/${id}`);
};

export const fetchePopularRecipe = async () => {
  const res = await serverFetch("/api/popular/recipe", {
    cache: "no-store",
  });
  return await res;
};

export const fetchFeatureRecipe = async () => {
  return await serverFetch("/api/feature/recipe", {
    cache: "no-store",
  });
};

export const fetctedRecipeDetails = async (id) => {
  return await serverFetch(`/api/recipedetails/${id}`);
};
