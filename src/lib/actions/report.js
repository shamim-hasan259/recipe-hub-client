"use server";
import { revalidatePath } from "next/cache";
import { removeServer, serverMution } from "../core/server";
export const postReprtRecipe = async (report) => {
  return await serverMution("/api/recipe/report", report, "POST");
};

export const dismisReport = async (id) => {
  const res = await removeServer(`/api/delete/reoprt/${id}`, "DELETE");
  revalidatePath("/dashboard/admin/reports");
  return await res;
};

export const deleteRecipe = async (id) => {
  const res = await removeServer(`/api/delete/recipe/report/${id}`, "DELETE");
  revalidatePath("/dashboard/admin/reports");
  return await res;
};
