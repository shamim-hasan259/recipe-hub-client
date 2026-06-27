import { serverProtectedFetch } from "../core/server";

export const getPayment = async (userId) => {
  return await serverProtectedFetch(`/api/getpayments?userId=${userId}`);
};
