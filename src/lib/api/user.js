import { serverProtectedFetch } from "../core/server";

export const getAllUsers = async () => {
  return await serverProtectedFetch("/api/total/user");
};

export const getPremiumUsers = async () => {
  return await serverProtectedFetch("/api/premium/user");
};
