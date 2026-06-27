"use server";

import { revalidatePath } from "next/cache";
import { serverMution, removeServer } from "../core/server";

export const addRecipe = async (data) => {
  const res = await serverMution("/api/recipes", data, "POST");
  revalidatePath("/dashboard/user/add-recipe");
  return await res;
};

export const updateRecipe = async (id, newData) => {
  return await serverMution(`/api/updaterecipe/${id}`, newData, "PATCH");
};

export const deleteRecipe = async (id) => {
  return await removeServer(`/api/deletercipe/${id}`, "DELETE");
};

export const incrementLikCout = async (id) => {
  return await serverMution(`/api/incrementlike/${id}`, {}, "PATCH");
};
