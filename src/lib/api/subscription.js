import { serverProtectedFetch } from "../core/server";

export const getAllSubscription = async () => {
  return await serverProtectedFetch("/api/subscrition/get");
};
