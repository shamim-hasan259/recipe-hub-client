import {
  revaliDateFetched,
  serverFetch,
  serverProtectedFetch,
} from "../core/server";

export const findRecipe = async (userId) => {
  return await serverProtectedFetch(`/api/recipes?userId=${userId}`);
};

export const singleRecipeFetch = async (id) => {
  return await serverProtectedFetch(`/api/singlerecipe/${id}`);
};

export const fetchePopularRecipe = async () => {
  return await revaliDateFetched("/api/popular/recipe", {
    next: { revalidath: 60 },
  });
};

export const fetchFeatureRecipe = async () => {
  return await revaliDateFetched("/api/feature/recipe");
};

export const fetctedRecipeDetails = async (id) => {
  return await serverFetch(`/api/recipedetails/${id}`);
};
