import { serverProtectedFetch } from "../core/server";

export const getAllReports = async () => {
  return await serverProtectedFetch("/api/recipe/report/get");
};
