"use server";
import { revalidatePath } from "next/cache";
import { removeServer, serverMution } from "../core/server";

export const updateFeatureAdmin = async (id, data) => {
  const res = serverMution(`/api/updaterfeatue/${id}`, data, "PATCH");
  revalidatePath("/dashboard/admin/manage-recipes");
  return await res;
};

export const deleteRecipeAdmin = async (id) => {
  const res = await removeServer(`/api/deletercipe/admin/${id}`, "DELETE");
  revalidatePath("/dashboard/admin/manage-recipes");
  return await res;
};

export const editRecipeAdmin = async (id, newData) => {
  return await serverMution(`/api/updaterecipe/admin/${id}`, newData, "PATCH");
};
